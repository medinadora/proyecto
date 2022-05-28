import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCargaPage } from './listar.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCargaPageRoutingModule {}
