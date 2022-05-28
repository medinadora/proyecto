import { Component, OnInit } from '@angular/core';
import { RegistroVehiculoService } from 'src/app/services/services-vehiculos/registrovehiculos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarVehiculosPage implements OnInit {


  vehiculos: any;
  id: any;
  actualizarVehiculoForm: FormGroup;

 
    vehi_tipo_vehiculo: any;
    vehi_chapa:  any;
    vehi_color:  any;
    vehi_estado: any;
    vehi_chofer:  any;
    vehiculos_usu: any;

  constructor(
    public registroService: RegistroVehiculoService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

     ngOnInit() {
       console.log('Este es el iddddd',this.id);
       this.actualizarVehiculoForm = this.formBuilder.group({
        vehi_tipo_vehiculo: [''],
        vehi_chapa:  [''],
         vehi_color:  [''],
        vehi_estado: [''],
         vehi_chofer:  [''],
          vehiculos_usu: ['']
       });
      this.getDato(this.id);
     }


  getDato(vehi_codigo){
    this.registroService.obtenerVehiculo(this.id)
    .subscribe(res => {
      console.log('DATAAAA',res);
    }
    );
  }

  onSubmit(){
    console.log(this.actualizarVehiculoForm.value);
  }
  actualizarForm() {
    console.log('codigo id metodo update', this.id);
      this.registroService.actualizarVehiculo(this.id, this.actualizarVehiculoForm.value)
        .subscribe((res) => {
          console.log(res);
          this.actualizarVehiculoForm.reset();
          
        });

  }

}