import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaCreateComponent } from './entradas/entrada-create/entrada-create.component';

const routes: Routes = [
  {
    path: "entradas",
    component: EntradaCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
