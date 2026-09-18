import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost:8080/login';
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this.apiUrl, { username, password });
  }
}
