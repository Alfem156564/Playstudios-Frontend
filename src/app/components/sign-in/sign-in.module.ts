import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { InputsModule } from '../inputs/inputs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotLoggedInGuard } from 'src/app/guards/not-logged-in.guard';

const routes: Routes = [
  {path:'',component:SignInComponent, canActivate:[NotLoggedInGuard]}
];


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputsModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
