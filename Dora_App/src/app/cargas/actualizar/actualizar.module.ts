import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarCargaPageRoutingModule } from './actualizar-routing.module';

import { ActualizarCargaPage } from './actualizar.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarCargaPageRoutingModule ,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  declarations: [ActualizarCargaPage]
})
export class ActualizarCargaPageModule {}
