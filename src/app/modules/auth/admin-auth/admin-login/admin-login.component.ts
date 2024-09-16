import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {SessionService} from "../../../../core/services/session/session.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminForgetPasswordComponent} from "../admin-forget-password/admin-forget-password.component";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private authService:AuthService,
              private toastrService:ToastrService,
              public dialog:MatDialog,
              private sessionService:SessionService) {
  }

  loginForm !:FormGroup;

  ngOnInit() {
    this.loginForm =
      this.formBuilder.group({
        email: new FormControl<string>('',Validators.email),
        password: new FormControl<string>('',Validators.required)
      })
  }

  login() {
    this.sessionService.clearUserData();
    if (this.loginForm.valid){
      console.log("user type :",this.loginForm.value)
      this.authService.employeeLogin(this.loginForm.value).pipe().subscribe(data=>{
        console.log("login user",data)
        if (data){
          this.sessionService.setUserJson(JSON.stringify(data));
          this.router.navigate(['/admin/dashboard']);
        }
        else {
          this.toastrService.error("Invalid Email or Password")
        }

      },error => {
        console.log("error",error.error.message)
        this.toastrService.error(error.error.message,"Error")
      })
    }else {
      this.toastrService.error("Invalid Email or Password")
      console.log("invalid Form")
    }
    if (this.loginForm.value['userType']=="EMPLOYEE"){
      this.router.navigateByUrl("/admin/dashboard")
    }
    if (this.loginForm.value['userType']=="CUSTOMER"){
      this.router.navigateByUrl("/customer/home")
    }

  }
  openModal(){
    this.dialog.open(AdminForgetPasswordComponent,{
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }
}
