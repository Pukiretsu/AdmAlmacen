import { Component, OnInit } from '@angular/core';
import { ModelSalida } from 'src/app/models/salida.model';
import { SalidasService } from 'src/app/services/salidas.service';

@Component({
  selector: 'app-salida-read',
  templateUrl: './salida-read.component.html',
  styleUrls: ['./salida-read.component.css']
})
export class SalidaReadComponent implements OnInit {
  index = NaN;
  SalidaList: ModelSalida[] = [];
  confirmation : boolean = false

  constructor(private SalidaServ : SalidasService) { }

  ngOnInit(): void {
    this.getSalidaList()
    this.index = NaN;
  }

  getSalidaList()
  {
    this.SalidaServ.readSalidas().subscribe((data:ModelSalida[])=>
    {
      this.SalidaList = data;
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

  deleteSalida()
  {
    this.SalidaServ.DeleteSalida(this.SalidaList[this.index]).subscribe(data=>
      {
        this.ngOnInit()
        this.confirmation = false
      });
  }
}
