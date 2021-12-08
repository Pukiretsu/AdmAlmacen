import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelFuncionario } from '../models/funcionario.model';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  
  url = "http://localhost:3000";
  token = " ";
  constructor(private request : HttpClient, private securityServ: SecurityService) {
    this.token = securityServ.getToken()
   }

  readFuncionarios():Observable<ModelFuncionario[]>
  {
    return this.request.get<ModelFuncionario[]>(`${this.url}/funcionarios`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  readFuncionariobyID(id: string):Observable<ModelFuncionario>
  {
    return this.request.get<ModelFuncionario>(`${this.url}/funcionarios/${id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    });
  }

  CreateFuncionario(Funcionario: ModelFuncionario) : Observable<ModelFuncionario>
  {
    return this.request.post<ModelFuncionario>(`${this.url}/funcionarios`, Funcionario,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  UpdateFuncionario(Funcionario: ModelFuncionario) : Observable<ModelFuncionario>
  {
    return this.request.put<ModelFuncionario>(`${this.url}/funcionarios/${Funcionario.id}`, Funcionario,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }

  DeleteFuncionario(Funcionario : ModelFuncionario) : Observable <any>
  {
    return this.request.delete(`${this.url}/funcionarios/${Funcionario.id}`,
    {
      headers: new HttpHeaders(
        {
          'Authorization': `Bearer ${this.token}`
        })
    })
  }
}
