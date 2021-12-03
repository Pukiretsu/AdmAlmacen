import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementoIndexComponent } from './elementos/elemento-index/elemento-index.component';
import { FuncionarioCreateComponent } from './funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioIndexComponent } from './funcionarios/funcionario-index/funcionario-index.component';

const routes: Routes = 
[
  {
    path:'funcionario-nuevo',
    component: FuncionarioCreateComponent
  },
  {
    path:'funcionarios',
    component: FuncionarioIndexComponent
  },
  {
    path:'elementos',
    component: ElementoIndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
