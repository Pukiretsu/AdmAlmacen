import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { PaswdchangeComponent } from './paswdchange/paswdchange.component';
import { PaswdrecoverComponent } from './paswdrecover/paswdrecover.component';


@NgModule({
  declarations: [
    LoginComponent,
    PaswdchangeComponent,
    PaswdrecoverComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
