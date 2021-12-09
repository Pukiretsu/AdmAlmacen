import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelGrado } from 'src/app/models/grado.model';
import { GradosService } from 'src/app/services/grados.service';

@Component({
  selector: 'app-grado-update',
  templateUrl: './grado-update.component.html',
  styleUrls: ['./grado-update.component.css']
})
export class GradoUpdateComponent implements OnInit {

  id = "";

  fgGradoValidator: FormGroup = this.fb.group(
    {
      'id': ["", [Validators.required]],
      'nombreGrado': ["", [Validators.required]],
    })
  


  constructor(
    private fb:FormBuilder, 
    private GradoServ : GradosService,
    private router: Router,
    private route: ActivatedRoute) { }

  getGrado()
  {
    this.GradoServ.readGradobyID(this.id).subscribe((data : ModelGrado)=>{
      this.fgGradoValidator.controls["id"].setValue(data.id);
      this.fgGradoValidator.controls["nombreGrado"].setValue(data.nombreGrado);
    })
  }

  EditGrado()
  {
    let nombreGrado = this.fgGradoValidator.controls["nombreGrado"].value;
    let e = new ModelGrado();

    e.id = this.id;
    e.nombreGrado = nombreGrado;


    this.GradoServ.UpdateGrado(e).subscribe((data:ModelGrado)=>{
      alert("Grado editado Correctamente")
      this.router.navigate(["/admin/grado"])
    }, (error:any) => {
      alert("Error editando Grado Revise los datos o contacte al administrador")
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getGrado()
  }


}
