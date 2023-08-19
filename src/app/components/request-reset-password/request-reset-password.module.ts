import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestResetPasswordComponent } from './request-reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { InputsModule } from '../inputs/inputs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotLoggedInGuard } from 'src/app/guards/not-logged-in.guard';


const routes: Routes = [
  {path:'',component:RequestResetPasswordComponent, canActivate:[NotLoggedInGuard]}
];


@NgModule({
  declarations: [
    RequestResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputsModule,
    ReactiveFormsModule
  ]
})
export class RequestResetPasswordModule { }
