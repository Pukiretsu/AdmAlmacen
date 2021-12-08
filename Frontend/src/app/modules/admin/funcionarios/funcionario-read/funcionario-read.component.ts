import { Component, OnInit } from '@angular/core';
import { ModelFuncionario } from 'src/app/models/funcionario.model';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {


  index = NaN;
  FuncionarioList: ModelFuncionario[] = [];
  confirmation : boolean = false

  constructor(private FuncionarioServ : FuncionariosService) { }

  ngOnInit(): void {
    this.getFuncionarioList()
    this.index = NaN;
  }

  getFuncionarioList()
  {
    this.FuncionarioServ.readFuncionarios().subscribe((data:ModelFuncionario[])=>
    {
      this.FuncionarioList = data;
    })
  }

  triggerConfirmation(index : number)
  {
    this.index = index;
    this.confirmation = true;
  }

  closeConfirmation()
  {
    this.ngOnInit();
    this.confirmation = false;
  }

  deleteFuncionario()
  {
    this.FuncionarioServ.DeleteFuncionario(this.FuncionarioList[this.index]).subscribe(data=>
      {
        this.ngOnInit()
        this.confirmation = false
      });
  }

}
