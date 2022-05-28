import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarVehiculosPageRoutingModule } from './actualizar-routing.module';

import { ActualizarVehiculosPage } from './actualizar.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarVehiculosPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ActualizarVehiculosPage]
})
export class ActualizarVehiculosPageModule {}
