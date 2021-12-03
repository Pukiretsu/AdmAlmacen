import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IdentifyModel } from 'src/app/models/identify.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  sbs : Subscription = new Subscription();
  constructor(private securityserv : SecurityService) { }

  ngOnInit(): void 
  {
    this.sbs = this.securityserv.GetSessionUserData().subscribe()  
  }

}
