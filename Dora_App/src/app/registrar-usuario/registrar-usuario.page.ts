import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {

  registroForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    public router: Router
  ) {
    this.registroForm = this.formsBuilder.group({
      usu_nombre: [''],
      usu_apellido: [''],
      usu_documento: [''],
      usu_telefono: [''],
      usu_correo: [''],
      usu_contrasenha: [''],
    });
  }


  ngOnInit() {
    console.log(this.registroForm);
  }

  crearUsuario() {
    console.log(this.registroForm);

    this.usuarioService
      .crearUsuario(this.registroForm.value)
      .subscribe((res) => {
        console.log(res);
      });
      this.router.navigate(['/login']);
  }

}