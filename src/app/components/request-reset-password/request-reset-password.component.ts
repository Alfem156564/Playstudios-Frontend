import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.scss']
})
export class RequestResetPasswordComponent {
  constructor (private auth: AuthService, private feedback: FeedbackService, private router: Router){}
  form = new FormGroup({ 
    email: new FormControl('',[Validators.required, Validators.email])
  })
  requestPassword(){
    if(this.form.invalid){
      this.feedback.showWarning('Fill all form fields')
      return
    }
    console.log(this.form.getRawValue())
    this.auth.requestResetPassword(this.form.getRawValue()).subscribe({
      next: this.succesRequest.bind(this),
      error: this.failRequest.bind(this)
    })
  }

  succesRequest(obj: any){
    this.feedback.showSuccess('Email send')
    this.router.navigate(['sign-in'])
    console.log(obj)
  }

  failRequest(obj: any){
    this.feedback.showFailure(obj?.error?.message || 'Ups somethig goes wrong')
    console.log(obj)
  }
}
