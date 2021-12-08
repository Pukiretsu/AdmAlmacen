import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IdentifyModel} from '../models/identify.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url = "http://localhost:3000";
  userDataOnSession = new BehaviorSubject<IdentifyModel>(new IdentifyModel());

  constructor(private request: HttpClient) { 
    this.CheckActiveSession();
  }

  CheckActiveSession()
  {
    let datos = this.ActiveSessioninfo();
    if (datos)
    {
      this.refreshSessionData(JSON.parse(datos));
    }
  }
  
  refreshSessionData(data : IdentifyModel)
  {
    this.userDataOnSession.next(data);
  }

  GetSessionUserData()
  {
    return this.userDataOnSession.asObservable();
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
    this.refreshSessionData(data);
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
    this.refreshSessionData(new IdentifyModel())
  }

  ActiveSessioninfo()
  {
    let stringData = localStorage.getItem("datosSesion")
    return stringData
  }
  
  getToken(){
    let stringData = localStorage.getItem("datosSesion")
    if(stringData)
    {
      let data = JSON.parse(stringData);
      return data.tk
    } else {return " "}
  }
}
