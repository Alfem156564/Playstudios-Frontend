import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot
  ): Promise<boolean> {
    try {
      await this.sessionService.validateToken();

      return true
    } catch (error) {
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}