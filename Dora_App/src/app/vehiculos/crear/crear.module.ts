import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearVehiculosPageRoutingModule } from './crear-routing.module';

import { CrearVehiculosPage } from './crear.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearVehiculosPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [CrearVehiculosPage]
})
export class CrearVehiculosPageModule {}
