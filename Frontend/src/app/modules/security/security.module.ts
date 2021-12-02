import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { PaswdchangeComponent } from './paswdchange/paswdchange.component';
import { PaswdrecoverComponent } from './paswdrecover/paswdrecover.component';
import { LogOutComponent } from './log-out/log-out.component';


@NgModule({
  declarations: [
    PaswdchangeComponent,
    PaswdrecoverComponent,
    LogOutComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
