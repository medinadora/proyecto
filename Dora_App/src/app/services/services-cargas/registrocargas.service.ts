import { Carga } from "src/app/interfaces/cargas";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
  export class RegistroCargaService {
    api = 'http://localhost:3000/cargas';
    constructor(public http: HttpClient) {}
  
    listarCarga() {
      return this.http.get(this.api);
    }
  
    crearCarga(user: any) {
      return this.http.post(this.api + '/create', user);
    }
  
    buscarCarga(texto: String) {
      //return this.http.get(this.api + `-filter?q=${texto}`);
      return this.http.get(this.api + `-filter/${texto}` );
    }
  
    obtenerCarga(id: number){
      const path = `${this.api}/find/${id} `;
      return this.http.get(path);
    }
    
    actualizarCarga(car_codigo, carga: Carga) {
      return this.http.put(
        'http://localhost:3000/cargas/update/' + car_codigo,
         carga
      );
    }
   
    eliminarCargaService(id: Observable<Carga[]>) {
      return this.http.delete<Carga[]>(
        'http://localhost:3000/cargas/remove/' + id
      );
    }
  }