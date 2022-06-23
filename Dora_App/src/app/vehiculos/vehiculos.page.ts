import { Component, OnInit } from '@angular/core';
import { RegistroVehiculoService } from '../services/services-vehiculos/registrovehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  users;
  vehi_codigo: number;

  constructor(private registroService: RegistroVehiculoService) { }


  ngOnInit() {
    this.listarVehiculos();
  }


  ionViewWillEnter(){
    this.listarVehiculos();
  }


   listarVehiculos(){
    this.registroService.listarVehiculo()
    .subscribe((data ) => {
      console.log(data);
      this.users = data['vehiculos'];
      
      for (const vehi_codigo in this.users) {
        if (Object.prototype.hasOwnProperty.call(this.users, vehi_codigo)) {
          const element = this.users[vehi_codigo];
         
          
        }
      }
    });
   }

  buscar(event){
    const valor = event.detail.value;

    this.registroService.buscarVehiculo(valor).subscribe(data => {
      console.log(data);
      if(data){
        this.users = data['vehiculos'];
      }else{
        this.users = [];
      }
    });
  }

  eliminarVehiculo(vehiculos, i, slidingItem){
    console.log('eliminar, eliminar');
    if(window.confirm('Seguro que quieres eliminar?')){
      this.registroService.eliminarVehiculoService(vehiculos.vehi_codigo)
      .subscribe(() => {
        this.users.splice(i,1);
        slidingItem.close();
        this.ionViewWillEnter();
        console.log('vehiculo eliminado!');
      });
    }

  }

}