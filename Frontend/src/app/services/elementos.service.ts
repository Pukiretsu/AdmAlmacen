import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelElemento } from '../models/elemento.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  url = "http://localhost:3000";
  token = " ";
  constructor(private request : HttpClient, private securityServ: SecurityService) {
    this.token = securityServ.getToken()
   }

  readElementos():Observable<ModelElemento[]>
  {
    return this.request.get<ModelElemento[]>(`${this.url}/elementos`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  readElementobyID(id: string):Observable<ModelElemento>
  {
    return this.request.get<ModelElemento>(`${this.url}/elementos/${id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  CreateElemento(elemento: ModelElemento) : Observable<ModelElemento>
  {
    return this.request.post<ModelElemento>(`${this.url}/elementos`, elemento,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  UpdateElemento(elemento: ModelElemento) : Observable<ModelElemento>
  {
    return this.request.put<ModelElemento>(`${this.url}/elementos/${elemento.id}`, elemento,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  DeleteElemento(elemento : ModelElemento) : Observable <any>
  {
    return this.request.delete(`${this.url}/elementos/${elemento.id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }
}
