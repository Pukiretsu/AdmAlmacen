import { Component, OnInit } from '@angular/core';
import { ModelEntrada } from 'src/app/models/entrada.model';
import { EntradasService } from 'src/app/services/entradas.service';

@Component({
  selector: 'app-entrada-read',
  templateUrl: './entrada-read.component.html',
  styleUrls: ['./entrada-read.component.css']
})
export class EntradaReadComponent implements OnInit {
  index = NaN;
  EntradaList: ModelEntrada[] = [];
  confirmation : boolean = false

  constructor(private EntradaServ : EntradasService) { }

  ngOnInit(): void {
    this.getEntradaList()
    this.index = NaN;
  }

  getEntradaList()
  {
    this.EntradaServ.readEntradas().subscribe((data:ModelEntrada[])=>
    {
      this.EntradaList = data;
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

  deleteEntrada()
  {
    this.EntradaServ.DeleteEntrada(this.EntradaList[this.index]).subscribe(data=>
      {
        this.ngOnInit()
        this.confirmation = false
      });
  }
}
