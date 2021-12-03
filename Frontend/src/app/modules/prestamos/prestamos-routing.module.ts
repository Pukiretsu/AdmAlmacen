import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamoIndexComponent } from './prestamo-index/prestamo-index.component';
import { PrestanteIndexComponent } from './prestante/prestante-index/prestante-index.component';

const routes: Routes = [
  {
    path:'prestamo',
    component: PrestamoIndexComponent
  },
  {
    path:'prestantes',
    component: PrestanteIndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
