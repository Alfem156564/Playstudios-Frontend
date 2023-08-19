import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'sign-in',loadChildren:()=>import('./components/sign-in/sign-in.module').then((module)=> module.SignInModule)},
  {path:'sign-up',loadChildren:()=>import('./components/sign-up/sign-up.module').then((module)=> module.SignUpModule)},
  {path:'request-reset-password',loadChildren:()=>import('./components/request-reset-password/request-reset-password.module').then((module)=> module.RequestResetPasswordModule)},
  {path:'reset-password',loadChildren:()=>import('./components/reset-password/reset-password.module').then((module)=> module.ResetPasswordModule)},
  {path:'dashboard',loadChildren:()=>import('./components/dashbord/dashbord.module').then((module)=> module.DashbordModule)},
  {path:'**', redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
