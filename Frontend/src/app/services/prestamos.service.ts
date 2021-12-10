import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelPrestamo } from '../models/prestamos.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  url = "http://localhost:3000";
  token = " ";
  constructor(private request : HttpClient, private securityServ: SecurityService) {
    this.token = securityServ.getToken()
   }

  readPrestamos():Observable<ModelPrestamo[]>
  {
    return this.request.get<ModelPrestamo[]>(`${this.url}/prestamos`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  readPrestamobyID(id: string):Observable<ModelPrestamo>
  {
    return this.request.get<ModelPrestamo>(`${this.url}/prestamos/${id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  CreatePrestamo(Prestamo: ModelPrestamo) : Observable<ModelPrestamo>
  {
    return this.request.post<ModelPrestamo>(`${this.url}/prestamos`, Prestamo,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  UpdatePrestamo(Prestamo: ModelPrestamo) : Observable<ModelPrestamo>
  {
    return this.request.put<ModelPrestamo>(`${this.url}/prestamos/${Prestamo.id}`, Prestamo,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  DeletePrestamo(Prestamo : ModelPrestamo) : Observable <any>
  {
    return this.request.delete(`${this.url}/prestamos/${Prestamo.id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }
}
