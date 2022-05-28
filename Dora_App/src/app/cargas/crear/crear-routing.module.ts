import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCargasPage } from './crear.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCargasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCargasPageRoutingModule {}
