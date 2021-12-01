import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { PaswdchangeComponent } from './paswdchange/paswdchange.component';
import { PaswdrecoverComponent } from './paswdrecover/paswdrecover.component';


@NgModule({
  declarations: [
    PaswdchangeComponent,
    PaswdrecoverComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
