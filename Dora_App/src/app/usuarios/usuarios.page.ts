import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  users;
  usu_codigo: number;

  constructor(private registroService: RegistroService) { }


  ngOnInit() {
    this.listarUsuarios();
  }


  ionViewWillEnter(){
    this.listarUsuarios();
  }


   listarUsuarios(){
    this.registroService.listarUsuario()
    .subscribe((data ) => {
      console.log(data);
      this.users = data['usuarios'];
      //console.log('codigoooos',this.users['usu_codigo'])
      for (const usu_codigo in this.users) {
        if (Object.prototype.hasOwnProperty.call(this.users, usu_codigo)) {
          const element = this.users[usu_codigo];
          //console.log(element.usu_codigo )
          
        }
      }
    });
   }

  buscar(event){
    const valor = event.detail.value;
    this.registroService.buscarUsuario(valor).subscribe(data => {
      console.log(data);
      if(data){
        this.users = data['usuarios'];
      }else{
        this.users = [];
      }
    });
  }

  eliminarUsuario(usuarios, i, slidingItem){
    console.log('eliminar, eliminar');
    if(window.confirm('Seguro que quieres eliminar?')){
      this.registroService.eliminarUsuarioService(usuarios.usu_codigo)
      .subscribe(() => {
        this.users.splice(i,1);
        slidingItem.close();
        this.ionViewWillEnter();
        console.log('Usuario eliminado!');
      });
    }

  }

}