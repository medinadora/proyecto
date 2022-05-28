import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo} from 'src/app/interfaces/vehiculos';  

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  api = 'http://localhost:3000/vehiculo';
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