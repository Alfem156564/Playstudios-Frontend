import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, take, timeout } from 'rxjs';
import { FeedbackService } from './feedback.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private storage: StorageService, private http: HttpClient, private feedback: FeedbackService, private router: Router) { }

  private loggedUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  _loggedUser : Observable<any> = this.loggedUser.asObservable()

  validateToken(){
    return new Promise<void>((res, rej)=>{
      const token = this.storage.get('token')
      if(!token){
        return rej()
      }
      this.http.get('http://localhost:7259/api/account/me', {
        headers:{
          "Authorization": token
        }
      }).pipe(take(1)).subscribe({
        next: (d) =>{
          this.loggedUser.next(d)
          res()
        },
        error: () =>{
          this.storage.remove('token')
          this.feedback.showFailure('Session is expired')
          rej()
        }
      })
    })
  }

  logout(){
    this.storage.remove('token')
    this.loggedUser.next(null)
    this.router.navigate(['sign-in'])
  }
}
