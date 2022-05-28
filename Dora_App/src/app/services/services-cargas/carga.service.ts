import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carga } from 'src/app/interfaces/cargas';  

@Injectable({
  providedIn: 'root',
})
export class CargaService {
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


  // actualizarUsuario(usu_codigo, usuario: Usuario) {
  //   return this.http.put(
  //     'http://localhost:3000/usuario/update/' + usu_codigo,
  //     usuario
  //   );
  // }

  // eliminarUsuarioService(id: Observable<Usuario[]>) {
  //   return this.http.delete<Usuario[]>(
  //     'http://localhost:3000/usuario/remove/' + id
  //   );
  // }
}