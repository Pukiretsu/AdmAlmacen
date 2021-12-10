import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelCedula } from '../models/cedula.model';
import { ModelPrestante } from '../models/prestantes.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class PrestantesService {

  cedulaFilter = {
    "fields": 
    {
      "id":true,
      "nombre":false,
      "apellido":false,
      "cedula":true,
      "placa":false,
      "dependencia":false,
      "grado":false,
      "telefono":false,
      "prestamos":false,
    }
  };

  url = "http://localhost:3000";
  token = " ";
  constructor(private request : HttpClient, private securityServ: SecurityService) {
    this.token = securityServ.getToken()
   }

  readCedulas():Observable<ModelCedula[]>
  {
    return this.request.get<ModelCedula[]>(`${this.url}/prestantes?filter=${JSON.stringify(this.cedulaFilter)}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }
  readPrestantes():Observable<ModelPrestante[]>
  {
    return this.request.get<ModelPrestante[]>(`${this.url}/prestantes`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  readPrestantebyID(id: string):Observable<ModelPrestante>
  {
    return this.request.get<ModelPrestante>(`${this.url}/prestantes/${id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  CreatePrestante(Prestante: ModelPrestante) : Observable<ModelPrestante>
  {
    return this.request.post<ModelPrestante>(`${this.url}/prestantes`, Prestante,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  UpdatePrestante(Prestante: ModelPrestante) : Observable<ModelPrestante>
  {
    return this.request.put<ModelPrestante>(`${this.url}/prestantes/${Prestante.id}`, Prestante,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  DeletePrestante(Prestante : ModelPrestante) : Observable <any>
  {
    return this.request.delete(`${this.url}/prestantes/${Prestante.id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }
}
