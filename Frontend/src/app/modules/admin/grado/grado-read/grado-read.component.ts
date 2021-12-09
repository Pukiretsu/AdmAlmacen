import { Component, OnInit } from '@angular/core';
import { ModelGrado } from 'src/app/models/grado.model';
import { GradosService } from 'src/app/services/grados.service';

@Component({
  selector: 'app-grado-read',
  templateUrl: './grado-read.component.html',
  styleUrls: ['./grado-read.component.css']
})
export class GradoReadComponent implements OnInit {
  index = NaN;
  GradoList: ModelGrado[] = [];
  confirmation : boolean = false

  constructor(private GradoServ : GradosService) { }

  ngOnInit(): void {
    this.getGradoList()
    this.index = NaN;
  }

  getGradoList()
  {
    this.GradoServ.readGrados().subscribe((data:ModelGrado[])=>
    {
      this.GradoList = data;
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

  deleteGrado()
  {
    this.GradoServ.DeleteGrado(this.GradoList[this.index]).subscribe(data=>
      {
        this.ngOnInit()
        this.confirmation = false
      });
  }
}
