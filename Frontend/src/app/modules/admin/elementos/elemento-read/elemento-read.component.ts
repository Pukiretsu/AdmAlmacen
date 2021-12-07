import { Component, OnInit } from '@angular/core';
import { ModelElemento } from 'src/app/models/elemento.model';
import { ElementosService } from 'src/app/services/elementos.service';


@Component({
  selector: 'app-elemento-read',
  templateUrl: './elemento-read.component.html',
  styleUrls: ['./elemento-read.component.css']
})
export class ElementoReadComponent implements OnInit {

  index = NaN;
  elementoList: ModelElemento[] = [];
  confirmation : boolean = false

  constructor(private elementoServ : ElementosService) { }

  ngOnInit(): void {
    this.getElementoList()
    this.index = NaN;
  }

  getElementoList()
  {
    this.elementoServ.readElementos().subscribe((data:ModelElemento[])=>
    {
      this.elementoList = data;
    })
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

  deleteElemento()
  {
    this.elementoServ.DeleteElemento(this.elementoList[this.index]).subscribe(data=>
      {
        this.ngOnInit()
        this.confirmation = false
      });
  }

}
