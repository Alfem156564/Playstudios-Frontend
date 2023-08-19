import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';

const routes: Routes = [
  {path:'',component:DashbordComponent, canActivate:[LoggedInGuard]}
];


@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashbordModule { }
