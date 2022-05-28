import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargasPage } from './cargas.page';

const routes: Routes = [
  {
    path: '',
    component: CargasPage
  },
  {
    path: 'listar',
    loadChildren: () => import('./listar/listar.module').then( m => m.ListarCargaPageModule)
  },
  {
    path: 'pendientes/:id',
    loadChildren: () => import('./pendientes/pendientes.module').then( m => m.PendientesPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearCargasPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargasPageRoutingModule {}
