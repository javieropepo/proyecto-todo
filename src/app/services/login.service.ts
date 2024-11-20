import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://backendspring-production-e101.up.railway.app';

  constructor(private http: HttpClient) { }

  login(credentials: Auth): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials, {
      observe: 'response'
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
