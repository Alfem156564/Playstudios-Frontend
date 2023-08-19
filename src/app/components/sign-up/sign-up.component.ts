import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor (private auth: AuthService, private feedback: FeedbackService, private router: Router){}
  form = new FormGroup({ 
    name: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  createUser(){
    if(this.form.invalid){
      this.feedback.showWarning('Fill all form fields')
      return
    }
    console.log(this.form.getRawValue())
    this.auth.createUser(this.form.getRawValue()).subscribe({
      next: this.succesCreateUser.bind(this),
      error: this.failCreateUser.bind(this)
    })
  }

  succesCreateUser(obj: any){
    this.feedback.showSuccess('Welcome')
    this.router.navigate(['sign-in'])
    console.log(obj)
  }

  failCreateUser(obj: any){
    this.feedback.showFailure(obj?.error?.message || 'Ups somethig goes wrong')
    console.log(obj)
  }
}
