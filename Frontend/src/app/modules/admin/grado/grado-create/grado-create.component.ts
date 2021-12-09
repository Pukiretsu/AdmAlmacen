import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelGrado } from 'src/app/models/grado.model';
import { GradosService } from 'src/app/services/grados.service';

@Component({
  selector: 'app-grado-create',
  templateUrl: './grado-create.component.html',
  styleUrls: ['./grado-create.component.css']
})
export class GradoCreateComponent implements OnInit {

  fgGradoValidator: FormGroup = this.fb.group(
    {
      'nombreGrado': ["", [Validators.required]],
    })
  


  constructor(
    private fb:FormBuilder, 
    private GradoServ : GradosService,
    private router: Router) { }

  saveGrado()
  {
    let nombreGrado = this.fgGradoValidator.controls["nombreGrado"].value;

    let e = new ModelGrado();
    
    e.nombreGrado = nombreGrado;

    this.GradoServ.CreateGrado(e).subscribe((data:ModelGrado)=>{
      alert("Grado Almacenado Con éxito en la base de datos")
      this.router.navigate(["/admin/grado"])
    }, (error:any) => {
      alert("Error almacenando Grado Revise los datos o contacte al administrador")
    })
  }
  
  restoreData()
  {
    let data = [
      "Patrullero",
      "Subintendente",
      "Intendente",
      "Intendente jefe",
      "Subcomisario",
      "Comisario",
      "Subteniente",
      "Teniente",
      "Capitán",
      "Mayor",
      "Teniente coronel",
      "Coronel",
    ]
    let ent : ModelGrado = new ModelGrado()
    for(let i = 0; i < data.length; i++){
      ent.nombreGrado = data[i];
      this.GradoServ.CreateGrado(ent).subscribe((data:ModelGrado)=>{})
    }
    this.router.navigate(["/admin/grado"])
  }  /* Esta funcion es un macro no debe usarse seguido */

  ngOnInit(): void {
  }

}
