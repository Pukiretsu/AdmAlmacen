import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { PrestamoCreateComponent } from './prestamo-create/prestamo-create.component';
import { PrestamoUpdateComponent } from './prestamo-update/prestamo-update.component';
import { PrestamoReadComponent } from './prestamo-read/prestamo-read.component';
import { SalidaReadComponent } from './salidas/salida-read/salida-read.component';
import { SalidaUpdateComponent } from './salidas/salida-update/salida-update.component';
import { EntradaUpdateComponent } from './entradas/entrada-update/entrada-update.component';
import { EntradaReadComponent } from './entradas/entrada-read/entrada-read.component';
import { PrestanteCreateComponent } from './prestante/prestante-create/prestante-create.component';
import { PrestanteUpdateComponent } from './prestante/prestante-update/prestante-update.component';
import { PrestanteReadComponent } from './prestante/prestante-read/prestante-read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrestamoCreateComponent,
    PrestamoUpdateComponent,
    PrestamoReadComponent,
    SalidaReadComponent,
    SalidaUpdateComponent,
    EntradaUpdateComponent,
    EntradaReadComponent,
    PrestanteCreateComponent,
    PrestanteUpdateComponent,
    PrestanteReadComponent,
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrestamosModule { }
