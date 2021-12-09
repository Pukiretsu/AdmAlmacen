import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelGrado } from '../models/grado.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class GradosService {
  url = "http://localhost:3000";
  token = " ";
  constructor(private request : HttpClient, private securityServ: SecurityService) {
    this.token = securityServ.getToken()
   }

  readGrados():Observable<ModelGrado[]>
  {
    return this.request.get<ModelGrado[]>(`${this.url}/grado`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  readGradobyID(id: string | undefined):Observable<ModelGrado>
  {
    return this.request.get<ModelGrado>(`${this.url}/grado/${id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  CreateGrado(Grado: ModelGrado) : Observable<ModelGrado>
  {
    return this.request.post<ModelGrado>(`${this.url}/grado`, Grado,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  UpdateGrado(Grado: ModelGrado) : Observable<ModelGrado>
  {
    return this.request.put<ModelGrado>(`${this.url}/grado/${Grado.id}`, Grado,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  DeleteGrado(Grado : ModelGrado) : Observable <any>
  {
    return this.request.delete(`${this.url}/grado/${Grado.id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }
}
