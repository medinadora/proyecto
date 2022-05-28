import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearVehiculosPage } from './crear.page';

const routes: Routes = [
  {
    path: '',
    component: CrearVehiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearVehiculosPageRoutingModule {}
