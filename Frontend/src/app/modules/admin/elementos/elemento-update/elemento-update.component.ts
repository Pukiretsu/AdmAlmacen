import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelElemento } from 'src/app/models/elemento.model';
import { ElementosService } from 'src/app/services/elementos.service';

@Component({
  selector: 'app-elemento-update',
  templateUrl: './elemento-update.component.html',
  styleUrls: ['./elemento-update.component.css']
})
export class ElementoUpdateComponent implements OnInit {
  id = "";

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

  constructor(
    private fb:FormBuilder, 
    private elementoServ : ElementosService,
    private router: Router,
    private route: ActivatedRoute) { }


  GetElemento()
  {
    this.elementoServ.readElementobyID(this.id).subscribe((data:ModelElemento)=>{
      this.fgElementValidator.controls["id"].setValue(data.id)
      this.fgElementValidator.controls["clase"].setValue(data.clase)
      this.fgElementValidator.controls["marca"].setValue(data.marca)
      this.fgElementValidator.controls["model"].setValue(data.model)
      this.fgElementValidator.controls["serie"].setValue(data.serie)
      this.fgElementValidator.controls["numeroInventario"].setValue(data.numeroInventario)
      this.fgElementValidator.controls["plazoMaximo"].setValue(data.plazoMaximo)
    });
  }
  
  EditElement()
  {
    let clase = this.fgElementValidator.controls["clase"].value;
    let marca = this.fgElementValidator.controls["marca"].value;
    let modelo = this.fgElementValidator.controls["model"].value;
    let serie = this.fgElementValidator.controls["serie"].value;
    let plazoMaximo= this.fgElementValidator.controls["plazoMaximo"].value;
    let numeroInventario = this.fgElementValidator.controls["numeroInventario"].value;

    let e = new ModelElemento();

    e.id = this.id;
    e.clase = clase;
    e.marca = marca;
    e.model = modelo;
    e.serie = serie;
    e.plazoMaximo = String(plazoMaximo);
    e.numeroInventario = numeroInventario;

    this.elementoServ.UpdateElemento(e).subscribe((data:ModelElemento)=>{
      alert("Producto Editado Correctamente")
      this.router.navigate(["/admin/elementos"])
    }, (error:any) => {
      alert("Error Almacenando Producto")
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.GetElemento()
  }

}
