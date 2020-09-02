import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string) {
    return this.http.post(URL + '/user/login', {userName, password});
  }
}
