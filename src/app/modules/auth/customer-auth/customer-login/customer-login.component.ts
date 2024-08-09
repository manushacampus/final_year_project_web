import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../../core/services/api/customer/customer.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {SessionService} from "../../../../core/services/session/session.service";

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private authService:AuthService,
              private toastrService:ToastrService,
              public dialog:MatDialog,
              private sessionService:SessionService,
              private customerService:CustomerService) {
  }
  detailsForm!:FormGroup;

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  login() {
    this.sessionService.clearUserData();
    if (this.detailsForm.valid){
      this.authService.customerLogin(this.detailsForm.value).pipe().subscribe(data=>{
        console.log("login user",data)
        if (data){
          this.sessionService.setUserJson(JSON.stringify(data));
          this.router.navigateByUrl("/customer/home")
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

    if (this.detailsForm.value['userType']=="CUSTOMER"){
      this.router.navigateByUrl("/customer/home")
    }
  }
}
