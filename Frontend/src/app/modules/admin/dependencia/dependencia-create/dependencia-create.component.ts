import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelDependencia } from 'src/app/models/dependencia.model';
import { DependenciasService } from 'src/app/services/dependencias.service';

@Component({
  selector: 'app-dependencia-create',
  templateUrl: './dependencia-create.component.html',
  styleUrls: ['./dependencia-create.component.css']
})
export class DependenciaCreateComponent implements OnInit {


  fgDependenciaValidator: FormGroup = this.fb.group(
    {
      'nombreDependencia': ["", [Validators.required]],
    })

  constructor(
    private fb:FormBuilder, 
    private DependenciaServ : DependenciasService,
    private router: Router) { }

  saveDependencia()
  {
    let nombreDependencia = this.fgDependenciaValidator.controls["nombreDependencia"].value;
    let e = new ModelDependencia();

    e.nombreDependencia = nombreDependencia;



    this.DependenciaServ.CreateDependencia(e).subscribe((data:ModelDependencia)=>{
      alert("Dependencia Almacenado Con éxito en la base de datos")
      this.router.navigate(["/admin/dependencias"])
    }, (error:any) => {
      alert("Error almacenando Dependencia Revise los datos o contacte al administrador")
    })
  }

  restoreData()
  {
    let data = [
      "Telem",
      "Asjur",
      "Codin",
      "Tahum",
      "Garma",
      "Coper",
      "Subco",
      "Coman",
      "Almin",
      "Gutra",
      "Sepri",
      "Coest",
      "Plane",
      "Preci",
      "Sepro",
    ]
    let ent : ModelDependencia = new ModelDependencia()
    for(let i = 0; i < data.length; i++){
      ent.nombreDependencia = data[i];
      this.DependenciaServ.CreateDependencia(ent).subscribe((data:ModelDependencia)=>{})
    }
    this.router.navigate(["/admin/dependencias"])
  }  /* Esta funcion es un macro no debe usarse seguido */

  ngOnInit(): void {

  }

}
