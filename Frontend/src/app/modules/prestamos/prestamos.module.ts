import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamosRoutingModule } from './prestamos-routing.module';
import { PrestamoCreateComponent } from './prestamo-create/prestamo-create.component';
import { PrestamoUpdateComponent } from './prestamo-update/prestamo-update.component';
import { PrestamoReadComponent } from './prestamo-read/prestamo-read.component';
import { SalidaCreateComponent } from './salidas/salida-create/salida-create.component';
import { SalidaReadComponent } from './salidas/salida-read/salida-read.component';
import { SalidaUpdateComponent } from './salidas/salida-update/salida-update.component';
import { EntradaCreateComponent } from './entradas/entrada-create/entrada-create.component';
import { EntradaUpdateComponent } from './entradas/entrada-update/entrada-update.component';
import { EntradaReadComponent } from './entradas/entrada-read/entrada-read.component';
import { PrestanteCreateComponent } from './prestante/prestante-create/prestante-create.component';
import { PrestanteUpdateComponent } from './prestante/prestante-update/prestante-update.component';
import { PrestanteReadComponent } from './prestante/prestante-read/prestante-read.component';


@NgModule({
  declarations: [
    PrestamoCreateComponent,
    PrestamoUpdateComponent,
    PrestamoReadComponent,
    SalidaCreateComponent,
    SalidaReadComponent,
    SalidaUpdateComponent,
    EntradaCreateComponent,
    EntradaUpdateComponent,
    EntradaReadComponent,
    PrestanteCreateComponent,
    PrestanteUpdateComponent,
    PrestanteReadComponent,
  ],
  imports: [
    CommonModule,
    PrestamosRoutingModule
  ]
})
export class PrestamosModule { }
