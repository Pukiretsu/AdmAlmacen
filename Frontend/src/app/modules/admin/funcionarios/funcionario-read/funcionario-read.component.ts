import { Component, OnInit } from '@angular/core';
import { ModelDependencia } from 'src/app/models/dependencia.model';
import { ModelFuncionario } from 'src/app/models/funcionario.model';
import { ModelGrado } from 'src/app/models/grado.model';
import { DependenciasService } from 'src/app/services/dependencias.service';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import { GradosService } from 'src/app/services/grados.service';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {
  index = NaN;
  FuncionarioList: ModelFuncionario[] = [];
  confirmation : boolean = false

  constructor(
    private FuncionarioServ : FuncionariosService,
    private GradoServ : GradosService,
    private DependenciaServ : DependenciasService,
    ) { }

  ngOnInit(): void {
    this.getFuncionarioList()
    this.index = NaN;
  }

  getFuncionarioList()
  {
    this.FuncionarioServ.readFuncionarios().subscribe((data:ModelFuncionario[])=>
    {
      let dependencia = new ModelDependencia();
      let grado = new ModelGrado();
      this.FuncionarioList = data;
      for(let i = 0; i < this.FuncionarioList.length; i++)
      {
        this.DependenciaServ.readDependenciabyID(this.FuncionarioList[i].dependencia).subscribe((data:ModelDependencia)=>
        {
          dependencia = data;
          this.FuncionarioList[i].dependencia = dependencia.nombreDependencia;
        });
        this.GradoServ.readGradobyID(this.FuncionarioList[i].grado).subscribe((data:ModelGrado)=>
        {
          grado = data;
          this.FuncionarioList[i].grado = grado.nombreGrado;
        });
      }
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
