import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable,tap ,catchError,throwError } from 'rxjs';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,
              private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Call Interceptor....",this.authService.getLoginUser())
    return next.handle(request).pipe(tap((response: any) => {
      if (response && response.status < 300) {
         // After a failed response we need to make sure next sucess request does not show.
      }
      return response;

    }), catchError((error:any) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        // Unauthorized error, token expired or invalid
        this.authService.logout(); // Clear user session
        // Redirect to login page
      }
      return throwError(error);
    }));

  }


}
