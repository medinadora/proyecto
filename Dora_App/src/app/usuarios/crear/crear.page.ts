import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder,
    private registroService: RegistroService,
    public router: Router
  ) {
    this.registroForm = this.formsBuilder.group({
      usu_nombre: [''],
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

    this.registroService
      .crearUsuario(this.registroForm.value)
      .subscribe((res) => {
        console.log(res);
      });
      this.router.navigate(['/admin/usuarios']);
  }

}