import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environment/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) {}

  // REGISTRO DE LOGIN
  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password,
    };
    return this.http.post(`${this.URL}/api/auth/login`, body)
  }

  // REGISTRO DE NUEVO USUARIO EN LA BD
  sendNewCredentials(email: string, password: string):Observable <any>{
    const body = {
      email,
      password,
    };
    return this.http.post(`${this.URL}/api/auth/signup`, body)
  }
}
