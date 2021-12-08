import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependenciaCreateComponent } from './dependencia/dependencia-create/dependencia-create.component';
import { DependenciaReadComponent } from './dependencia/dependencia-read/dependencia-read.component';
import { DependenciaUpdateComponent } from './dependencia/dependencia-update/dependencia-update.component';
import { ElementoCreateComponent } from './elementos/elemento-create/elemento-create.component';
import { ElementoReadComponent } from './elementos/elemento-read/elemento-read.component';
import { ElementoUpdateComponent } from './elementos/elemento-update/elemento-update.component';
import { FuncionarioCreateComponent } from './funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './funcionarios/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './funcionarios/funcionario-update/funcionario-update.component';
import { GradoCreateComponent } from './grado/grado-create/grado-create.component';
import { GradoReadComponent } from './grado/grado-read/grado-read.component';
import { GradoUpdateComponent } from './grado/grado-update/grado-update.component';

const routes: Routes = 
[
  {
    path:'funcionarios',
    component: FuncionarioReadComponent
  },
  {
    path:'funcionarios/Crear',
    component: FuncionarioCreateComponent
  },
  {
    path:'funcionarios/Editar/:id',
    component: FuncionarioUpdateComponent
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
  {
    path:'grado',
    component: GradoReadComponent
  },
  {
    path:'grado/Crear',
    component: GradoCreateComponent
  },
  {
    path:'grado/editar/:id',
    component: GradoUpdateComponent
  },
  {
    path:'dependencias',
    component: DependenciaReadComponent
  },
  {
    path:'dependencias/Crear',
    component: DependenciaCreateComponent
  },
  {
    path:'grado/editar/:id',
    component: DependenciaUpdateComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
