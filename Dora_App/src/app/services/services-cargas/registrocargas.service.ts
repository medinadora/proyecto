import { Carga } from "src/app/interfaces/cargas";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
  })
  export class RegistroCargaService {
    api = 'http://localhost:3000/carga';
    constructor(public http: HttpClient) {}
  
    listarCarga() {
      return this.http.get(this.api + 's');
    }
  
    crearCarga(user: any) {
      return this.http.post(this.api + '/create', user);
    }
  
    buscarCarga(texto: String) {
      return this.http.get(this.api + `s-filter?q=${texto}`);
    }
  
    obtenerCarga(id: number){
      const path = `${this.api}/find/${id}`;
      return this.http.get(path);
    }
  
  
    pendientesCarga(car_codigo, carga: Carga) {
      return this.http.put(
        'http://localhost:3000/carga/update/' + car_codigo,
        carga
      );
    }
    
  
    eliminarCargaService(id: Observable<Carga[]>) {
      return this.http.delete<Carga[]>(
        'http://localhost:3000/carga/remove/' + id
      );
    }
  }