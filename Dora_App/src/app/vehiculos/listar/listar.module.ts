import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarVehiculoPageRoutingModule } from './listar-routing.module';

import { ListarVehiculoPage } from './listar.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarVehiculoPageRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ListarVehiculoPage]
})
export class ListarVehiculoPageModule {}
