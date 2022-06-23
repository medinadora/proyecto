import { Component, OnInit } from '@angular/core';
import { RegistroCargaService } from '../services/services-cargas/registrocargas.service';
@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.page.html',
  styleUrls: ['./cargas.page.scss'],
})
export class CargasPage implements OnInit {
  users;
  car_codigo: number;
  constructor(private registroService: RegistroCargaService) { }


  ngOnInit() {
    this.listarCargas();
  }
  ionViewWillEnter(){
    this.listarCargas();
  }


   listarCargas(){
    this.registroService.listarCarga()
    .subscribe((data ) => {
      console.log(data);
      this.users = data['cargas'];
      for (const car_codigo in this.users) {
        if (Object.prototype.hasOwnProperty.call(this.users, car_codigo)) {
          const element = this.users[car_codigo];
        }
      }
    });
   }

  buscar(event){
    const valor = event.detail.value;

    this.registroService.buscarCarga(valor)
    .subscribe(data => {
      console.log(data);
      if(data){
        this.users = data['cargas'];
      }else{
        this.users = [];
      }
    });
  }

  eliminarCarga(cargas, i, slidingItem){
    console.log('eliminar, eliminar');
    if(window.confirm('Seguro que quieres eliminar?')){
      this.registroService.eliminarCargaService(cargas.car_codigo)
      .subscribe(() => {
        this.users.splice(i,1);
        slidingItem.close();
        this.ionViewWillEnter();
        console.log('Carga eliminada!');
      });
    }

  }

}

