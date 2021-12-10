import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelDependencia } from 'src/app/models/dependencia.model';
import { ModelGrado } from 'src/app/models/grado.model';
import { ModelPrestamo } from 'src/app/models/prestamos.model';
import { DependenciasService } from 'src/app/services/dependencias.service';
import { GradosService } from 'src/app/services/grados.service';
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: 'app-prestamo-create',
  templateUrl: './prestamo-create.component.html',
  styleUrls: ['./prestamo-create.component.css']
})
export class PrestamoCreateComponent implements OnInit {

  /* 0 = sin buscar | 1 = encontrado | 2 = inexistente */
  elementoState : number = 0 
  prestanteState : number = 0 


  fgFuncionarioValidator: FormGroup = this.fb.group(
    {
      'cedula': ["", [Validators.required]],
      'placa': ["", [Validators.required]],
      'nombre': ["", [Validators.required]],
      'apellido1': ["", [Validators.required]],
      'apellido2': ["", [Validators.required]],
      'grado': ["", [Validators.required]],
      'dependencia': ["", [Validators.required]],
      'telefono':["", [Validators.required]],
    })

  fgElementValidator: FormGroup = this.fb.group(
    {
      'id': ["", [Validators.required]],
      'clase': ["", [Validators.required]],
      'marca': ["", [Validators.required]],
      'model': ["", [Validators.required]],
      'serie': ["", [Validators.required]],
      'numeroInventario': ["", [Validators.required]],
      'plazoMaximo':[""]
    })

    
  fgPrestamoValidator: FormGroup = this.fb.group(
    {
      'idPrestante':  ["", [Validators.required]],
      'idElemento':   ["", [Validators.required]],
      'observaciones':["", [Validators.required]],
      'servicio':     ["", [Validators.required]],
      'fechaSalida':  ["", [Validators.required]],
      'fechaEntrada': ["", [Validators.required]],
    })
  
  gradoList : ModelGrado[] = [];
  dependenciaList : ModelDependencia[] = [];

  constructor(
    private fb:FormBuilder, 
    private PrestamoServ : PrestamosService,
    private gradoServ : GradosService,
    private dependenciaServ : DependenciasService,
    private router: Router) { }

  savePrestamo()
  {
    let idSalida  = this.fgPrestamoValidator.controls["idSalida"].value;
    let idPrestante  = this.fgPrestamoValidator.controls["idPrestante"].value;
    let idElemento  = this.fgPrestamoValidator.controls["idElemento"].value;
    let servicio  = this.fgPrestamoValidator.controls["servicio"].value;
    let fechaSalida  = this.fgPrestamoValidator.controls["fechaSalida"].value;
    let fechaEntrada  = this.fgPrestamoValidator.controls["fechaEntrada"].value;

    let e = new ModelPrestamo();

    e.idSalida = idSalida;
    e.idEntrada = "Sin Entregar";
    e.idPrestante = idPrestante;
    e.idElemento = idElemento; 
    e.servicio = servicio; 
    e.fechaSalida = fechaSalida;
    e.fechaEntrada = fechaEntrada;

    this.PrestamoServ.CreatePrestamo(e).subscribe((data:ModelPrestamo)=>{
      alert("Prestamo Almacenado Con éxito en la base de datos")
      this.router.navigate(["/admin/funcionarios"])
    }, (error:any) => {
      alert("Error almacenando Prestamo Revise los datos o contacte al administrador")
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

  searchAndValidate(config : string)
  {
    switch(config)
    {
      case "elemento":
        {
          this.elementoState = 1;
          break;
        }
      case "prestante":
        {
          this.prestanteState = 1;
          this.fgFuncionarioValidator.get("grado")?.disable();
          this.fgFuncionarioValidator.get("dependencia")?.disable();
          break;
        }
      default:
        {
          alert("ERROR: revise la expresión")
          break;
        }
    }
  }

  ngOnInit(): void {
    this.getDependenciaList()
    this.getGradoList()
    this.fgElementValidator.controls[""]
  }

}
