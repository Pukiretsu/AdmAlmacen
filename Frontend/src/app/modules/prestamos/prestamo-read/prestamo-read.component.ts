import { Component, OnInit } from '@angular/core';
import { ModelPrestamo } from 'src/app/models/prestamos.model';
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: 'app-prestamo-read',
  templateUrl: './prestamo-read.component.html',
  styleUrls: ['./prestamo-read.component.css']
})
export class PrestamoReadComponent implements OnInit {

  index = NaN;
  PrestamoList: ModelPrestamo[] = [];
  confirmation : boolean = false

  constructor(private PrestamoServ : PrestamosService) { }

  ngOnInit(): void {
    this.getPrestamoList()
    this.index = NaN;
  }

  getPrestamoList()
  {
    this.PrestamoServ.readPrestamos().subscribe((data:ModelPrestamo[])=>
    {
      this.PrestamoList = data;
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

  deletePrestamo()
  {
    this.PrestamoServ.DeletePrestamo(this.PrestamoList[this.index]).subscribe(data=>
      {
        this.ngOnInit()
        this.confirmation = false
      });
  }
}
