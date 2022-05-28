import { Component, OnInit } from '@angular/core';
import { RegistroCargaService } from 'src/app/services/services-cargas/registrocargas.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: ['./pendientes.page.scss'],
})
export class PendientesPage implements OnInit {

  carga = [];
  id: any;
  pendientesCargaForm: FormGroup;
  users: any;

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

      
    }

     ngOnInit() {
       this.listarCarga();
     }


  getDato(car_codigo){
    this.registroService.obtenerCarga(this.id)
    .subscribe(res => {
      console.log('DATAAAA',res);
    }
    );
  }

  onSubmit(){
    console.log(this.pendientesCargaForm.value);
  }
  pendientesForm() {
    console.log('codigo id metodo update', this.id);
      this.registroService.pendientesCarga(this.id, this.pendientesCargaForm.value)
        .subscribe((res) => {
          console.log(res);
          this.pendientesCargaForm.reset();
          //this.router.navigate(['/usuarios']);
        });

  }

  listarCarga(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.registroService.obtenerCarga(this.id).subscribe((data) => {
      console.log(data)
      if (data) {
        this.carga = data['cargas'];
      } else {
        this.carga = [];
      }

    
          
        
      
    });
    
  }

  }


