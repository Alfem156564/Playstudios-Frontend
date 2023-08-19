import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { InputsModule } from '../inputs/inputs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotLoggedInGuard } from 'src/app/guards/not-logged-in.guard';


const routes: Routes = [
  {path:'',component:SignUpComponent, canActivate:[NotLoggedInGuard]}
];

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputsModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
