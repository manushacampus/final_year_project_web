import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedSubRole = route.data['expectedSubRole'];
    const userSubRole = this.authService.getLoginUser().designation;
    console.log("login role",userSubRole)
    console.log("expectedSubRole role",expectedSubRole)

    if (this.authService.isSessionExpired() && userSubRole == expectedSubRole) {
      // this.router.navigate(['/not-authorized']);
      return true;
    }
    if (this.authService.isSessionExpired() && "ALL" == expectedSubRole) {
      // this.router.navigate(['/not-authorized']);
      return true;
    }
    console.log("cant log",expectedSubRole)
    this.authService.logout();
    return false;
  }
}
