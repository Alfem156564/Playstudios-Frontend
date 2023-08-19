import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedInGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    try {
      await this.sessionService.validateToken();
      this.router.navigate(['/dashboard']);
      return false;
    } catch (error) {
      return true;
    }
  }
}