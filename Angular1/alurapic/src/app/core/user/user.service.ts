import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import {  BehaviorSubject } from 'rxjs';
import { User } from './user.component';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    console.group('decodeAndNotify');
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    console.log(user);
    console.groupEnd();
    this.userSubject.next(user);
  }

  logout(){
    this.tokenService.remove();
    this.userSubject.next(null);
  }
}
