import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCargasPageRoutingModule } from './crear-routing.module';

import { CrearCargasPage } from './crear.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCargasPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [CrearCargasPage]
})
export class CrearCargasPageModule {}
