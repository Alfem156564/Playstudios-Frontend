import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from '../../services/feedback.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor (private auth: AuthService, private feedback: FeedbackService, private storage: StorageService, private router: Router){}
  form = new FormGroup({ 
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  login(){
    if(this.form.invalid){
      this.feedback.showWarning('Fill all form fields')
      return
    }
    console.log(this.form.getRawValue())
    this.auth.login(this.form.getRawValue()).subscribe({
      next: this.succesLogin.bind(this),
      error: this.failLogin.bind(this)
    })
  }

  succesLogin(obj: any){
    this.storage.set('token',obj.id)
    this.router.navigate(['dashboard'])
    this.feedback.showSuccess('Welcome')
    console.log(obj)
  }

  failLogin(obj: any){
    this.feedback.showFailure(obj?.error?.message || 'Ups somethig goes wrong')
    console.log(obj)
  }

  navigateRequestPassword(){
    this.router.navigate(['request-reset-password'])
  }
}
