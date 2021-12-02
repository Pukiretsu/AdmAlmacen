import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IdentifyModel } from 'src/app/models/identify.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  
  onSession : boolean = false

  sbs : Subscription = new Subscription();

  constructor(private securityserv : SecurityService) { }


  ngOnInit(): void {
    this.sbs = this.securityserv.GetSessionUserData().subscribe((datos : IdentifyModel) => {
      if(datos.tk){
        this.onSession = true;
      } else {
        this.onSession = false;
      }
    })
  }

}
