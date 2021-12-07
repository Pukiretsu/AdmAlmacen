import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';
import { SecurityService } from 'src/app/services/security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  invalidData : boolean = false

  fgvalidator : FormGroup = this.fb.group(
  {
    'placa': ['',[Validators.required]],
    'cedula': ['',[Validators.required]],
    'passwd': ['',[Validators.required]]
  });

  KeyUpEnter(keyEvent: KeyboardEvent)
  {
    if (keyEvent.key == 'Enter')
    {
      document.getElementById("submmit-login")?.click();
    }
  }

  constructor(private fb: FormBuilder, private securityService : SecurityService, private router : Router) { }

  ngOnInit(): void 
  {
    this.invalidData=false
  }

  identifyFuncionario()
  {
    let placa = this.fgvalidator.controls["placa"].value;
    let cedula = this.fgvalidator.controls["cedula"].value;
    let pass = crypto.MD5(this.fgvalidator.controls["passwd"].value).toString();
    this.securityService.Identificar(placa,cedula,pass).subscribe(
      (data:any) => {
        this.securityService.SessionStorage(data);
        this.router.navigate(['/inicio'])
      },
      (error: any) => {
        this.invalidData=true;
      }
    )
  }

}
