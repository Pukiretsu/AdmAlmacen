import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelDependencia } from '../models/dependencia.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class DependenciasService {
  url = "http://localhost:3000";
  token = " ";
  constructor(private request : HttpClient, private securityServ: SecurityService) {
    this.token = securityServ.getToken()
   }

  readDependencias():Observable<ModelDependencia[]>
  {
    return this.request.get<ModelDependencia[]>(`${this.url}/dependencias`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  readDependenciabyID(id: string | undefined):Observable<ModelDependencia>
  {
    return this.request.get<ModelDependencia>(`${this.url}/dependencias/${id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  CreateDependencia(Dependencia: ModelDependencia) : Observable<ModelDependencia>
  {
    return this.request.post<ModelDependencia>(`${this.url}/dependencias`, Dependencia,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  UpdateDependencia(Dependencia: ModelDependencia) : Observable<ModelDependencia>
  {
    return this.request.put<ModelDependencia>(`${this.url}/dependencias/${Dependencia.id}`, Dependencia,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  DeleteDependencia(Dependencia : ModelDependencia) : Observable <any>
  {
    return this.request.delete(`${this.url}/dependencias/${Dependencia.id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }
}
