import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,private router:Router) {
  }

  loginForm !:FormGroup;

  ngOnInit() {
    this.loginForm =
      this.formBuilder.group({
        userType: new FormControl<string>('')
      })
  }

  login() {
    console.log("user type :",this.loginForm.value['userType'])
    if (this.loginForm.value['userType']=="EMPLOYEE"){
      this.router.navigateByUrl("/admin")
    }
    if (this.loginForm.value['userType']=="CUSTOMER"){
      this.router.navigateByUrl("/customer/home")
    }

  }
}
