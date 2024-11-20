import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'https://backendspring-production-e101.up.railway.app';

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario:Usuario): Observable<any> {
    return this.http.post<Usuario>(`${this.baseUrl}/api/register`, usuario)
  }
}