import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

export const AuthGuard :CanActivateFn=async(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)=> {
  const authService  = inject(AuthService)
  const isValid = await authService.checkTokenValidity();
  console.log("auth is work",isValid)

  if (isValid){
    console.log("auth is work valid")
    return true;
  }
  authService.logout();
    return false;
};
