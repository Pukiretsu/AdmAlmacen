import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FuncionarioCreateComponent } from './funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './funcionarios/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './funcionarios/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './funcionarios/funcionario-delete/funcionario-delete.component';
import { ElementoCreateComponent } from './elementos/elemento-create/elemento-create.component';
import { ElementoUpdateComponent } from './elementos/elemento-update/elemento-update.component';
import { ElementoDeleteComponent } from './elementos/elemento-delete/elemento-delete.component';
import { ElementoReadComponent } from './elementos/elemento-read/elemento-read.component';
import { PrestamoDeleteComponent } from './prestamo-delete/prestamo-delete.component';
import { SalidaDeleteComponent } from './salida-delete/salida-delete.component';
import { EntradaDeleteComponent } from './entrada-delete/entrada-delete.component';
import { PrestanteDeleteComponent } from './prestante-delete/prestante-delete.component';



@NgModule({
  declarations: [
  
    FuncionarioCreateComponent,
       FuncionarioReadComponent,
       FuncionarioUpdateComponent,
       FuncionarioDeleteComponent,
       ElementoCreateComponent,
       ElementoUpdateComponent,
       ElementoDeleteComponent,
       ElementoReadComponent,
       PrestamoDeleteComponent,
       SalidaDeleteComponent,
       EntradaDeleteComponent,
       PrestanteDeleteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
