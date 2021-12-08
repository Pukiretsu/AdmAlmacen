import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FuncionarioCreateComponent } from './funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './funcionarios/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './funcionarios/funcionario-update/funcionario-update.component';
import { ElementoCreateComponent } from './elementos/elemento-create/elemento-create.component';
import { ElementoUpdateComponent } from './elementos/elemento-update/elemento-update.component';
import { ElementoReadComponent } from './elementos/elemento-read/elemento-read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GradoCreateComponent } from './grado/grado-create/grado-create.component';
import { GradoUpdateComponent } from './grado/grado-update/grado-update.component';
import { GradoReadComponent } from './grado/grado-read/grado-read.component';
import { DependenciaReadComponent } from './dependencia/dependencia-read/dependencia-read.component';
import { DependenciaUpdateComponent } from './dependencia/dependencia-update/dependencia-update.component';
import { DependenciaCreateComponent } from './dependencia/dependencia-create/dependencia-create.component';


@NgModule({
  declarations: [
    FuncionarioCreateComponent,
    FuncionarioReadComponent,
    FuncionarioUpdateComponent,
    ElementoCreateComponent,
    ElementoUpdateComponent,
    ElementoReadComponent,
    GradoCreateComponent,
    GradoUpdateComponent,
    GradoReadComponent,
    DependenciaReadComponent,
    DependenciaUpdateComponent,
    DependenciaCreateComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
