import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../../core/services/api/customer/customer.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit{
  constructor(private customerService:CustomerService,
              private toastrService:ToastrService,
              private router:Router,) {
  }
  profileForm!:FormGroup;

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      gender: new FormControl(''),
      nic: new FormControl(''),
      dob: new FormControl(''),
      image: new FormControl(''),
      contact: new FormControl(''),
    });
    this.profileForm.valueChanges.pipe().subscribe(data=>{
      console.log("aaaa",this.profileForm.value)
    })
  }

  registerUser(){
    this.customerService.registerCustomer(this.profileForm.value).pipe().subscribe(data=>{
      console.log("response",data)
      if (data.code==200){
        this.toastrService.success("Registered...")
        this.router.navigateByUrl("/auth/customer/login")

      }else {
        this.toastrService.error("UnSuccess")
      }
    },error => {
      this.toastrService.error("UnSuccess")
    })
  }




}
