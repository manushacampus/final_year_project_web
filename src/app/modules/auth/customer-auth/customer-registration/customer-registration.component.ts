import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../../core/services/api/customer/customer.service";

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit{
  constructor(private customerService:CustomerService) {
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
    })
  }




}
