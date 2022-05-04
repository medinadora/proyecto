import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor(private registroService: RegistroService) { }

  listaUsuarios;

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.registroService.listarUsuario().subscribe(res =>{
      console.log(res);
      this.listaUsuarios = res['usuario'];
    });
  }
}