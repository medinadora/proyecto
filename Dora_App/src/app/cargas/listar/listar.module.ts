import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCargaPageRoutingModule } from './listar-routing.module'; 

import { ListarCargaPage } from './listar.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCargaPageRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [ListarCargaPage]
})
export class ListarCargaPageModule {}