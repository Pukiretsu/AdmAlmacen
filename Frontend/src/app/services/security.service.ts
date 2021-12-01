
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelData } from '../models/data.model';
import { IdentifyModel} from '../models/identify.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url = "http://localhost:3000";
  constructor(private request: HttpClient) { 

  }

  Identificar (placa: string,cedula: string, password: string): Observable<IdentifyModel>{
    return this.request.post <IdentifyModel> (`${this.url}/identificarPersona`,
    {
      cedula: cedula,
      placa:placa,
      password: password,
    },{headers: new HttpHeaders()}
    )
  }

  SessionStorage(data: IdentifyModel)
  {
    let stringdata = JSON.stringify(data);
    localStorage.setItem("datosSesion", stringdata)
  }

  GetSessionInfo()
  {
    let stringdata = localStorage.getItem("datosSesion");
    if(stringdata)
    {
      let data = JSON.parse(stringdata);
      return data
    }
    else
    {
      return null
    }
  }

  deleteSessionInfo()
  {
    localStorage.removeItem("datosSesion");
  }
}
