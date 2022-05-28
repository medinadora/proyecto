import { Component, OnInit } from '@angular/core';
import { RegistroVehiculoService } from '../../services/services-vehiculos/registrovehiculos.service';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarVehiculoPage implements OnInit {

  constructor(private registroService: RegistroVehiculoService) { }

  listaVehiculos;

  ngOnInit() {
    this.listarVehiculos();
  }

  listarVehiculos(){
    this.registroService.listarVehiculo().subscribe(res =>{
      console.log(res);
      this.listaVehiculos = res['vehiculos'];
    });
  }
}