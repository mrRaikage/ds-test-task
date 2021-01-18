import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service';


@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.hasToken()) {
      this.router.navigate(['login']);
      return false;
    }

    const url: string = state.url;
    return this.checkUserRole(next, url);
  }

  checkUserRole(route: ActivatedRouteSnapshot, url: any): boolean {
      const userRole = this.authService.getRole();
      if (route.data.role.indexOf(userRole) === -1) {
        this.router.navigate(['dashboard']);
        return false;
      }

      return true;
  }
}
