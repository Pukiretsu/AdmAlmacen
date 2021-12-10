import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelEntrada } from '../models/entrada.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  url = "http://localhost:3000";
  token = " ";
  constructor(private request : HttpClient, private securityServ: SecurityService) {
    this.token = securityServ.getToken()
   }

  readEntradas():Observable<ModelEntrada[]>
  {
    return this.request.get<ModelEntrada[]>(`${this.url}/entradas`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  readEntradabyID(id: string):Observable<ModelEntrada>
  {
    return this.request.get<ModelEntrada>(`${this.url}/entradas/${id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  CreateEntrada(Entrada: ModelEntrada) : Observable<ModelEntrada>
  {
    return this.request.post<ModelEntrada>(`${this.url}/entradas`, Entrada,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  UpdateEntrada(Entrada: ModelEntrada) : Observable<ModelEntrada>
  {
    return this.request.put<ModelEntrada>(`${this.url}/entradas/${Entrada.id}`, Entrada,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  DeleteEntrada(Entrada : ModelEntrada) : Observable <any>
  {
    return this.request.delete(`${this.url}/entradas/${Entrada.id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }
}
