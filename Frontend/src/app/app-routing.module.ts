import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './template/error/error.component';
import { LoginComponent } from './template/login/login.component';
import { MainComponent } from './template/main/main.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo:'/login',
  },
  {
    path: "inicio",
    component: MainComponent
  },
  {
    path:"admin",
    loadChildren: () => import("./modules/admin/admin.module").then(x => x.AdminModule)
  },
  {
    path:"security",
    loadChildren: () => import("./modules/security/security.module").then(x => x.SecurityModule),
  },
  {
    path:"prestamos",
    loadChildren: () => import("./modules/prestamos/prestamos.module").then(x => x.PrestamosModule)
  },
  {
    path:"**",
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
