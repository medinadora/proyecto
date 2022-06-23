
import { Component, OnInit } from '@angular/core';
import { RegistroCargaService } from 'src/app/services/services-cargas/registrocargas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarCargaPage implements OnInit {

  constructor(private registroService: RegistroCargaService) { }

  listaCargas;

  ngOnInit() {
    this.listarCargas();
  }

  listarCargas(){
    this.registroService.listarCarga().subscribe(res =>{
      console.log(res);
      this.listaCargas = res['cargas'];
    });
  }
}