import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCreateComponent } from './funcionarios/funcionario-create/funcionario-create.component';

const routes: Routes = 
[
  {
    path:'funcionario-create',
    component: FuncionarioCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
