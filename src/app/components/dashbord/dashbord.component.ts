import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {
 constructor(private session: SessionService){}
 
 user!: any

 ngAfterViewInit(): void {
  setTimeout(() => {
    this.session._loggedUser.subscribe((user)=>{
      this.user = user
    })
  }, 0);
 }

 logout(){
  this.session.logout()
 }
}
