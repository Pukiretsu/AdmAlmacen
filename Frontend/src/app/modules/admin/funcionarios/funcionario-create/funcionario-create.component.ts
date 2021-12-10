import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelFuncionario } from 'src/app/models/funcionario.model';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import * as crypto from 'crypto-js';
import { GradosService } from 'src/app/services/grados.service';
import { ModelGrado } from 'src/app/models/grado.model';
import { ModelDependencia } from 'src/app/models/dependencia.model';
import { DependenciasService } from 'src/app/services/dependencias.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  fgFuncionarioValidator: FormGroup = this.fb.group(
    {
      'cedula': ["", [Validators.required]],
      'placa': ["", [Validators.required]],
      'nombre': ["", [Validators.required]],
      'apellidos': ["", [Validators.required]],
      'grado': ["", [Validators.required]],
      'dependencia': ["", [Validators.required]],
      'telefono':["", [Validators.required]],
      'rol':["", [Validators.required]],
      'password':["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    })
  
  gradoList : ModelGrado[] = [];
  dependenciaList : ModelDependencia[] = [];

  constructor(
    private fb:FormBuilder, 
    private FuncionarioServ : FuncionariosService,
    private gradoServ : GradosService,
    private dependenciaServ : DependenciasService,
    private router: Router) { }

  saveFuncionario()
  {
    let cedula = this.fgFuncionarioValidator.controls["cedula"].value;
    let placa = this.fgFuncionarioValidator.controls["placa"].value;
    let nombre = this.fgFuncionarioValidator.controls["nombre"].value;
    let apellidos = this.fgFuncionarioValidator.controls["apellidos"].value;
    let grado = this.fgFuncionarioValidator.controls["grado"].value;
    let dependencia = this.fgFuncionarioValidator.controls["dependencia"].value;
    let telefono = this.fgFuncionarioValidator.controls["telefono"].value;
    let rol = this.fgFuncionarioValidator.controls["rol"].value;
    let password = crypto.MD5(this.fgFuncionarioValidator.controls["password"].value).toString();

    let e = new ModelFuncionario();

    e.cedula = cedula;
    e.placa = placa;
    e.nombre = nombre;
    e.apellidos = apellidos;
    e.grado = grado; 
    e.dependencia = dependencia; 
    e.telefono = telefono;
    e.rol = rol;
    e.password = password;



    this.FuncionarioServ.CreateFuncionario(e).subscribe((data:ModelFuncionario)=>{
      alert("Funcionario Almacenado Con éxito en la base de datos")
      this.router.navigate(["/admin/funcionarios"])
    }, (error:any) => {
      alert("Error almacenando Funcionario Revise los datos o contacte al administrador")
    })
  }

  getGradoList(){
    this.gradoServ.readGrados().subscribe((data:ModelGrado[])=>{
      this.gradoList = data;
    })
  }
  getDependenciaList(){
    this.dependenciaServ.readDependencias().subscribe((data:ModelDependencia[])=>{
      this.dependenciaList = data;
    })
  }

  ngOnInit(): void {
    this.getGradoList();
    this.getDependenciaList();
  }

}
