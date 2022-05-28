import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistroCargaService } from '../../services/services-cargas/registrocargas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearCargasPage implements OnInit {

  registroForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder,
    private registroService: RegistroCargaService,
    public router: Router
  ) {
    this.registroForm = this.formsBuilder.group({
      car_empresa: [''],
      car_tipo: [''],
      car_origen_destino: [''],
      car_precio: [''],
      car_fecha: [''],
      car_usu: [''],
      
    });
  }
  ngOnInit() {
    console.log(this.registroForm);
  }
  crearCarga() {
    console.log(this.registroForm);

    this.registroService
      .crearCarga(this.registroForm.value)
      .subscribe((res) => {
        console.log(res);
      });
      this.router.navigate(['/cargas']);
  }
}

