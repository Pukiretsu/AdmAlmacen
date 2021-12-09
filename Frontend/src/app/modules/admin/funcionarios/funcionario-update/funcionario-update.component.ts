import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelFuncionario } from 'src/app/models/funcionario.model';
import { FuncionariosService } from 'src/app/services/funcionarios.service';
import * as crypto from 'crypto-js';
import { ModelGrado } from 'src/app/models/grado.model';
import { GradosService } from 'src/app/services/grados.service';
import { ModelDependencia } from 'src/app/models/dependencia.model';
import { DependenciasService } from 'src/app/services/dependencias.service';
@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {
  id = "";

  gradoList : ModelGrado[] = [];
  dependenciaList : ModelDependencia[] = [];

  fgFuncionarioValidator: FormGroup = this.fb.group(
    {
      'id': ["", [Validators.required]],
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
  


  constructor(
    private fb:FormBuilder, 
    private FuncionarioServ : FuncionariosService,
    private gradoServ : GradosService,
    private dependenciaServ : DependenciasService,
    private router: Router,
    private route: ActivatedRoute) { }

  getFuncionario()
  {
    this.FuncionarioServ.readFuncionariobyID(this.id).subscribe((data : ModelFuncionario)=>{
      this.fgFuncionarioValidator.controls["id"].setValue(data.id);
      this.fgFuncionarioValidator.controls["cedula"].setValue(data.cedula);
      this.fgFuncionarioValidator.controls["placa"].setValue(data.placa);
      this.fgFuncionarioValidator.controls["nombre"].setValue(data.nombre);
      this.fgFuncionarioValidator.controls["apellidos"].setValue(data.apellidos);
      this.fgFuncionarioValidator.controls["grado"].setValue(data.grado);
      this.fgFuncionarioValidator.controls["dependencia"].setValue(data.dependencia);
      this.fgFuncionarioValidator.controls["telefono"].setValue(data.telefono);
      this.fgFuncionarioValidator.controls["rol"].setValue(data.rol);
    })
  }

  EditFuncionario()
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

    e.id = this.id;
    e.cedula = cedula;
    e.placa = placa;
    e.nombre = nombre;
    e.apellidos = apellidos;
    e.grado = grado;
    e.dependencia = dependencia;
    e.telefono = telefono;
    e.rol = rol;
    e.password = password;


    this.FuncionarioServ.UpdateFuncionario(e).subscribe((data:ModelFuncionario)=>{
      alert("Funcionario editado Correctamente")
      this.router.navigate(["/admin/funcionarios"])
    }, (error:any) => {
      alert("Error editando Funcionario Revise los datos o contacte al administrador")
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
    this.id = this.route.snapshot.params["id"];
    this.getGradoList()
    this.getDependenciaList()
    this.getFuncionario()
  }



}
