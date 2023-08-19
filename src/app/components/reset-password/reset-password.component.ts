import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  constructor (private auth: AuthService, private feedback: FeedbackService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.form.get('resetPasswordCode')?.setValue(this.route.snapshot.params['id'])
  }

  form = new FormGroup({ 
    password: new FormControl('',[Validators.required]),
    resetPasswordCode : new FormControl('',[Validators.required])
  })
  resetPassword(){
    if(this.form.invalid){
      this.feedback.showWarning('Fill all form fields')
      return
    }
    console.log(this.form.getRawValue())
    this.auth.resetPassword(this.form.getRawValue()).subscribe({
      next: this.succesReset.bind(this),
      error: this.failReset.bind(this)
    })
  }

  succesReset(obj: any){
    this.feedback.showSuccess('Password Updated')
    this.router.navigate(['sign-in'])
    console.log(obj)
  }

  failReset(obj: any){
    this.feedback.showFailure(obj?.error?.message || 'Ups somethig goes wrong')
    console.log(obj)
  }
}
