import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarVehiculosPage } from './actualizar.page';

const routes: Routes = [
  {
    path: '',
    component:ActualizarVehiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarVehiculosPageRoutingModule {}
