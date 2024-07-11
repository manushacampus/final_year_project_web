import { Injectable } from '@angular/core';
import {SessionService} from "../core/services/session/session.service";
import {Net, NetMethod, NetService} from "../commons/net/net.service";
import {Endpoint} from "../commons/net/endpoint";
import {map, Observable,catchError} from "rxjs";
import {UserService} from "../core/services/api/user.service";
import {Router} from "@angular/router";
import {StorageService} from "../core/services/storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sessionService: SessionService,
              private netService: NetService,
              private userService:UserService,
              private router:Router) { }

  // isValidToken():boolean{
  //   console.log("get user",this.sessionService.getCurrentUser())
  //   this.userService.getUser().pipe().subscribe(data=>{
  //     console.log("get user intigrate= ",data)
  //     if (data.code==200){
  //       return true
  //     }
  //     else {
  //       return false
  //     }
  //   },error => {
  //     return false
  //   })
  // }
  isValidToken(): Observable<boolean> {
    return this.userService.getUser().pipe(
      map(data => {
        console.log("get user integrate= ", data);
        return data.code === 200;
      }),
      catchError(error => {
        console.error('Error checking token:', error);
        return [false];
      })
    );
  }

  checkTokenValidity(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.isValidToken().subscribe(
        (isValid: boolean) => {
          if (isValid) {
            console.log('Token is valid');
            resolve(true);
          } else {
            console.log('Token is invalid');
            resolve(false);
          }
        },
        (error) => {
          console.error('Error subscribing to token validity:', error);
          resolve(false);
        }
      );
    });
  }
  getSessionToken(){
    console.log("token by Getsession token ",this.sessionService.getUserToken())
    console.log("token by Getsession token ",this.sessionService.getUserToken())
    return this.sessionService.getUserToken()
  }
  isSessionExpired():boolean{
    if (this.sessionService.getCurrentUser()){
      return true
    }
    return false;
  }
  employeeLogin(userCredential:any){
    const net = new Net(NetMethod.post, Endpoint.withUrl(Endpoint.LOGIN),
      userCredential);
    return this.netService.process(net).pipe(
      map((response) => {
        if (response) {
          console.log("login response",response)
          return response;
        }
        return null;
      })
    );

  }

  getLoginUser():any{
    return this.sessionService.getCurrentUser().valueOf();
  }
  logout(){
    this.sessionService.clearUserData();
    this.router.navigate(['/auth/admin/login']);
  }
}
