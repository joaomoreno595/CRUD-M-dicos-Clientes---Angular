import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../../models/model.medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private url: string;

  constructor(private httpClient:HttpClient) {
    this.url = 'https://localhost:44377/api/medicos';
  }  

  get(): Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(this.url);
  }

  getById(id:number): Observable<Medico>{
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Medico>(url);
  }

  delete(id: number): Observable<null>{
    const url = `${this.url}/${id}`;
    return this.httpClient.delete<null>(url);
  }

  post(medico: Medico): Observable<Medico>{
    return this.httpClient.post<Medico>(this.url, medico);
  }

  put(medico: Medico): Observable<Medico>{
    const url = `${this.url}/${medico.Id}`;
    return this.httpClient.put<Medico>(url, medico);
  }
}
