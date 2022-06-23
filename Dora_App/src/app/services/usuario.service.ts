import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../app/interfaces/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  api = 'http://localhost:3000/usuario';
  constructor(public http: HttpClient) {}

  listarUsuario() {
    return this.http.get(this.api + 's');
  }

  crearUsuario(user: any) {
    return this.http.post(this.api + '/create', user);
  }

  buscarUsuario(texto: String) {
    return this.http.get(this.api + `-filter?q=${texto}`);
    //`s-filter?q=${texto}` original
  }
  
  obtenerUsuario(id: number){
    const path = `${this.api}/find/${id}`;
    return this.http.get(path);
  }

}