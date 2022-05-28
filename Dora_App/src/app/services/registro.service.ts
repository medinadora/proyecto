import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root',
})

export class RegistroService {
  api = 'http://localhost:3000/usuarios';
  constructor(public http: HttpClient) {}


  listarUsuario() {
    return this.http.get(this.api);
  }

  crearUsuario(user: any) {
    return this.http.post(this.api + '/create', user);
  }

  buscarUsuario(texto: String) {
    console.log(texto)
    return this.http.get(this.api + `-filter/${texto}`);
  }

  obtenerUsuario(id: number){
    const path = `${this.api}/find/${id}`;
    return this.http.get(path);
  }


  actualizarUsuario(usu_codigo, usuario: Usuario) {
    return this.http.put(
      'http://localhost:3000/usuario/update/' + usu_codigo,
      usuario
    );
  }
  

  eliminarUsuarioService(id: Observable<Usuario[]>) {
    return this.http.delete<Usuario[]>(
      'http://localhost:3000/usuario/remove/' + id
    );
  }
}