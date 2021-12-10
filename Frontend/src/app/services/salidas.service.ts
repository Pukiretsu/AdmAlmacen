import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelSalida } from '../models/salida.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class SalidasService {
  url = "http://localhost:3000";
  token = " ";
  constructor(private request : HttpClient, private securityServ: SecurityService) {
    this.token = securityServ.getToken()
   }

  readSalidas():Observable<ModelSalida[]>
  {
    return this.request.get<ModelSalida[]>(`${this.url}/salidas`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  readSalidabyID(id: string):Observable<ModelSalida>
  {
    return this.request.get<ModelSalida>(`${this.url}/salidas/${id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  CreateSalida(Salida: ModelSalida) : Observable<ModelSalida>
  {
    return this.request.post<ModelSalida>(`${this.url}/salidas`, Salida,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  UpdateSalida(Salida: ModelSalida) : Observable<ModelSalida>
  {
    return this.request.put<ModelSalida>(`${this.url}/salidas/${Salida.id}`, Salida,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  DeleteSalida(Salida : ModelSalida) : Observable <any>
  {
    return this.request.delete(`${this.url}/salidas/${Salida.id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }
}
