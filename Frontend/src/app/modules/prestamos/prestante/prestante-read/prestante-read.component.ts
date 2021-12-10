import { Component, OnInit } from '@angular/core';
import { ModelPrestante } from 'src/app/models/prestantes.model';
import { PrestantesService } from 'src/app/services/prestantes.service';

@Component({
  selector: 'app-prestante-read',
  templateUrl: './prestante-read.component.html',
  styleUrls: ['./prestante-read.component.css']
})
export class PrestanteReadComponent implements OnInit {

  index = NaN;
  PrestanteList: ModelPrestante[] = [];
  confirmation : boolean = false

  constructor(private PrestanteServ : PrestantesService) { }

  ngOnInit(): void {
    this.getPrestanteList()
    this.index = NaN;
  }

  getPrestanteList()
  {
    this.PrestanteServ.readPrestantes().subscribe((data:ModelPrestante[])=>
    {
      this.PrestanteList = data;
    })
    /* #TODO: Agregar consumo de servicio de funcionarios */
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

  deletePrestante()
  {
    this.PrestanteServ.DeletePrestante(this.PrestanteList[this.index]).subscribe(data=>
      {
        this.ngOnInit()
        this.confirmation = false
      });
  }
}
