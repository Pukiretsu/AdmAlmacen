import { Component, OnInit } from '@angular/core';
import { ModelDependencia } from 'src/app/models/dependencia.model';
import { DependenciasService } from 'src/app/services/dependencias.service';

@Component({
  selector: 'app-dependencia-read',
  templateUrl: './dependencia-read.component.html',
  styleUrls: ['./dependencia-read.component.css']
})
export class DependenciaReadComponent implements OnInit {

  index = NaN;
  DependenciaList: ModelDependencia[] = [];
  confirmation : boolean = false

  constructor(private DependenciaServ : DependenciasService) { }

  ngOnInit(): void {
    this.getDependenciaList()
    this.index = NaN;
  }

  getDependenciaList()
  {
    this.DependenciaServ.readDependencias().subscribe((data:ModelDependencia[])=>
    {
      this.DependenciaList = data;
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

  deleteDependencia()
  {
    this.DependenciaServ.DeleteDependencia(this.DependenciaList[this.index]).subscribe(data=>
      {
        this.ngOnInit()
        this.confirmation = false
      });
  }
}
