import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelElemento } from 'src/app/models/elemento.model';
import { ElementosService } from 'src/app/services/elementos.service';

@Component({
  selector: 'app-elemento-create',
  templateUrl: './elemento-create.component.html',
  styleUrls: ['./elemento-create.component.css']
})
export class ElementoCreateComponent implements OnInit {

  fgElementValidator: FormGroup = this.fb.group(
    {
      'clase': ["", [Validators.required]],
      'marca': ["", [Validators.required]],
      'model': ["", [Validators.required]],
      'serie': ["", [Validators.required]],
      'numeroInventario': ["", [Validators.required]],
      'plazoMaximo':[""]
    })

  constructor(
    private fb:FormBuilder, 
    private elementoServ : ElementosService,
    private router: Router) { }

  saveElement()
  {
    let clase = this.fgElementValidator.controls["clase"].value;
    let marca = this.fgElementValidator.controls["marca"].value;
    let modelo = this.fgElementValidator.controls["model"].value;
    let serie = this.fgElementValidator.controls["serie"].value;
    let plazoMaximo= this.fgElementValidator.controls["plazoMaximo"].value;
    let numeroInventario = this.fgElementValidator.controls["numeroInventario"].value;

    let e = new ModelElemento();

    e.clase = clase;
    e.marca = marca;
    e.model = modelo;
    e.serie = serie;
    e.plazoMaximo = String(plazoMaximo);
    e.numeroInventario = numeroInventario;

    this.elementoServ.CreateElemento(e).subscribe((data:ModelElemento)=>{
      alert("Elemento Almacenado Con éxito en la base de datos")
      this.router.navigate(["/admin/elementos"])
    }, (error:any) => {
      alert("Error almacenando elemento Revise los datos o contacte al administrador")
    })
  }

  ngOnInit(): void {

  }

}
