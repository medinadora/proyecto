import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistroVehiculoService } from '../../services/services-vehiculos/registrovehiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearVehiculosPage implements OnInit {

  registroForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder,
    private registroService: RegistroVehiculoService,
    public router: Router
  ) {
    this.registroForm = this.formsBuilder.group({
      
    vehi_tipo_vehiculo: [''],
    vehi_chapa: [''],
    vehi_color: [''],
    vehi_estado:[''],
    vehi_chofer: [''],
    vehiculos_usu:[''],
    
    });
  }
  ngOnInit() {
    console.log(this.registroForm);
  }
  crearVehiculo() {
    console.log(this.registroForm);

    this.registroService
      .crearVehiculo(this.registroForm.value)
      .subscribe((res) => {
        console.log(res);
      });
      this.router.navigate(['/cargas']);
  }
}
