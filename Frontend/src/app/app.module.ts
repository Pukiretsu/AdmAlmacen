import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './template/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './template/side-navbar/side-navbar.component';
import { ErrorComponent } from './template/error/error.component';
import { LoginComponent } from './template/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './template/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    ErrorComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
