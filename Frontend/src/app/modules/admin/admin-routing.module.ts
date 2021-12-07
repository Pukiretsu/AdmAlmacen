import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementoCreateComponent } from './elementos/elemento-create/elemento-create.component';
import { ElementoReadComponent } from './elementos/elemento-read/elemento-read.component';
import { ElementoUpdateComponent } from './elementos/elemento-update/elemento-update.component';
import { FuncionarioCreateComponent } from './funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './funcionarios/funcionario-read/funcionario-read.component';

const routes: Routes = 
[
  {
    path:'funcionario-nuevo',
    component: FuncionarioCreateComponent
  },
  {
    path:'funcionarios',
    component: FuncionarioReadComponent
  },
  {    
    path:'elementos',
    component: ElementoReadComponent
  },
  {
    path:'elementos/Editar/:id',
    component: ElementoUpdateComponent
  },
  {
    path:'elementos/Crear',
    component: ElementoCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
