import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(obj: any){
    return this.http.post('http://localhost:7259/api/account/login',obj).pipe(take(1))
  }

  requestResetPassword(obj: any){
    return this.http.post('http://localhost:7259/api/user/password/reset',obj).pipe(take(1))
  }

  resetPassword(obj: any){
    return this.http.post('http://localhost:7259/api/user/password/update',obj).pipe(take(1))
  }

  createUser(obj: any){
    return this.http.post('http://localhost:7259/api/user',obj).pipe(take(1))
  }
}
