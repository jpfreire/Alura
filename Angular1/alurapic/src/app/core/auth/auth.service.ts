import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string) {
    return this.http
    .post(
      URL + '/user/login',
      {userName, password},
      {observe: 'response'}
    )
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      console.log(`${userName} logou com o token ${authToken}`);
    }

    ));
  }
}
