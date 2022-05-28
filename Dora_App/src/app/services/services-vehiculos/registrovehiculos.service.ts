import { Vehiculo} from "src/app/interfaces/vehiculos";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
  export class RegistroVehiculoService {
    api = 'http://localhost:3000/Vehiculo';
    constructor(public http: HttpClient) {}
  
    listarVehiculo() {
      return this.http.get(this.api + 's');
    }
  
    crearVehiculo(user: any) {
      return this.http.post(this.api + '/create', user);
    }
  
    buscarVehiculo(texto: String) {
      return this.http.get(this.api + `s-filter?q=${texto}`);
    }
  
    obtenerVehiculo(id: number){
      const path = `${this.api}/find/${id}`;
      return this.http.get(path);
    }
  
  
    actualizarVehiculo(vehi_codigo, vehiculo: Vehiculo) {
      return this.http.put(
        'http://localhost:3000/vehiculo/update/' + vehi_codigo,
        vehiculo
      );
    }
    
  
    eliminarVehiculoService(id: Observable<Vehiculo[]>) {
      return this.http.delete<Vehiculo[]>(
        'http://localhost:3000/Vehiculo/remove/' + id
      );
    }
  }