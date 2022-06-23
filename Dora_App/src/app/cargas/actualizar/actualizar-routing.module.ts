import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarCargaPage } from './actualizar.page';

const routes: Routes = [
  {
    path: '',
    component:  ActualizarCargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class  ActualizarCargaPageRoutingModule {}
