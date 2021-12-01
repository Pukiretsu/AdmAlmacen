import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as crypto from 'crypto-js';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgvalidator : FormGroup = this.fb.group(
    {
      'placa': ['',[Validators.required]],
      'cedula': ['',[Validators.required]],
      'passwd': ['',[Validators.required]]
    });

  constructor(private fb: FormBuilder, private securityService : SecurityService) { }

  ngOnInit(): void 
  {
  }

  identifyFuncionario()
  {
    let placa = this.fgvalidator.controls["placa"].value;
    let cedula = this.fgvalidator.controls["cedula"].value;
    let pass = crypto.MD5(this.fgvalidator.controls["passwd"].value).toString();
    this.securityService.Identificar(placa,cedula,pass).subscribe(
      (data:any) => {
        this.securityService.SessionStorage(data);
      },
      (error: any) => {
        // No Logrado
      }
    )
  }

}
