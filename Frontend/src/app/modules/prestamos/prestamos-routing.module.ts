import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaReadComponent } from './entradas/entrada-read/entrada-read.component';
import { EntradaUpdateComponent } from './entradas/entrada-update/entrada-update.component';
import { PrestamoCreateComponent } from './prestamo-create/prestamo-create.component';
import { PrestamoReadComponent } from './prestamo-read/prestamo-read.component';
import { PrestamoUpdateComponent } from './prestamo-update/prestamo-update.component';
import { PrestanteCreateComponent } from './prestante/prestante-create/prestante-create.component';
import { PrestanteReadComponent } from './prestante/prestante-read/prestante-read.component';
import { PrestanteUpdateComponent } from './prestante/prestante-update/prestante-update.component';
import { SalidaReadComponent } from './salidas/salida-read/salida-read.component';
import { SalidaUpdateComponent } from './salidas/salida-update/salida-update.component';

const routes: Routes = [
  {
    path:"prestamo",
    component: PrestamoReadComponent
  },
  {
    path:'prestamo/Crear',
    component:PrestamoCreateComponent
  },
  {
    path:'prestamo/Editar/:id',
    component:PrestamoUpdateComponent
  },
  {
    path:'prestante',
    component: PrestanteReadComponent
  },
  {
    path:'prestante/Editar/:id',
    component:PrestanteUpdateComponent
  },
  {
    path:'entrada',
    component: EntradaReadComponent
  },
  {
    path:'entrada/Editar/:id',
    component: EntradaUpdateComponent
  },
  {
    path:'salida',
    component: SalidaReadComponent
  },
  {
    path:'salida/Editar/:id',
    component: SalidaUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
