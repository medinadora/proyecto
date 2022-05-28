import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {


  usuarios: any;
  id: any;
  actualizarUsuarioForm: FormGroup;

  usu_nombre: any;
  usu_apellido: any;
  usu_correo: any;
  usu_documento: any;
  usu_telefono: any;

  constructor(
    public registroService: RegistroService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

     ngOnInit() {
       console.log('Este es el iddddd',this.id);
       this.actualizarUsuarioForm = this.formBuilder.group({
        usu_nombre: [''],
        usu_apellido: [''],
        usu_correo: [''],
        usu_documento: [''],
        usu_telefono: ['']
       });
      this.getDato(this.id);
     }


  getDato(usu_codigo){
    this.registroService.obtenerUsuario(this.id)
    .subscribe(res => {
      console.log('DATAAAA',res);
    }
    );
  }

  onSubmit(){
    console.log(this.actualizarUsuarioForm.value);
  }
  actualizarForm() {
    console.log('codigo id metodo update', this.id);
      this.registroService.actualizarUsuario(this.id, this.actualizarUsuarioForm.value)
        .subscribe((res) => {
          console.log(res);
          this.actualizarUsuarioForm.reset();
          //this.router.navigate(['/usuarios']);
        });

  }

}