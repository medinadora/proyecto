import { Component, OnInit } from '@angular/core';
import { RegistroCargaService } from 'src/app/services/services-cargas/registrocargas.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarCargaPage implements OnInit {

  
  cargas: any;
  id: any;
  actualizarCargaForm: FormGroup;
  
  car_empresa: any;
  car_tipo: any;
  car_origen_destino: any;
  car_precio: any;
  car_fecha: any;
  
 
  constructor(
    public registroService: RegistroCargaService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute

    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      
    }
    ngOnInit() {
      console.log('Este es el iddddd',this.id);
      this.actualizarCargaForm = this.formBuilder.group({
        car_empresa: [''],
        car_tipo: [''],
        car_origen_destino: [''],
        car_precio: [''],
        car_fecha: ['']
      });
     this.getDato(this.id);
    }


  getDato(car_codigo){
    this.registroService.obtenerCarga(this.id)
    .subscribe(res => {
      console.log('DATAAAA',res);
    }
    );
  }

  onSubmit(){
    console.log(this.actualizarCargaForm.value);
  }
  actualizarForm() {
    console.log('codigo id metodo update', this.id);
      this.registroService.actualizarCarga(this.id, this.actualizarCargaForm.value)
        .subscribe((res) => {
          console.log(res);
          this.actualizarCargaForm.reset();
          //this.router.navigate(['/cargas']);
        });

  }
  
  }


