import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../../../core/services/api/admin/employee.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.scss']
})
export class EmployeeRegComponent implements OnInit{
  constructor(private router: Router,
              private employeeService:EmployeeService,
              private toastrService:ToastrService) {
  }
  userForm!:FormGroup;
  employeeForm!:FormGroup;
  selectedTabIndex = 0;
  proImage!:File;
  cPassword!:FormGroup;
  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      address: new FormControl(''),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      nic: new FormControl(''),
      dob: new FormControl(''),
      image: new FormControl(''),
      contact: new FormControl(''),
    });
    this.employeeForm = new FormGroup({
      designation: new FormControl('',Validators.required),
      etf: new FormControl(''),
    });
    this.cPassword = new FormGroup({
      cPassword: new FormControl('',Validators.required)
      });

  }

  registerEmployee(){

    if (this.userForm.valid && this.employeeForm.valid  && this.cPassword.valid){
      if (this.userForm.get('password')?.value===this.cPassword.get('cPassword')?.value){
        this.employeeService.registerEmployee(this.userForm.value,this.employeeForm.value,this.proImage).pipe().subscribe((data:any)=>{
          console.log("sss",data)
          if (data.code==200){
            this.router.navigateByUrl('admin/employee/all')
            this.toastrService.success("success")
          }
          else {
            this.toastrService.error("Server Error","UnSuccess")
          }

        },error => {
          this.toastrService.error(error.error.message,"Error")
        })
      }
     else {
        this.toastrService.error("Password Did not match.. ","Error")
      }

    }else {
      this.toastrService.error("Invalid Form","Error")
    }

  }


  goToNextTab() {
    if (this.selectedTabIndex < 1) { // Assuming there are 3 tabs
      this.selectedTabIndex++;
    }
  }
  goToPreviousTab() {
    if (this.selectedTabIndex > 0) {
      this.selectedTabIndex--;
    }
  }

  close() {
    this.router.navigateByUrl('admin/employee/all')
  }

  onFileSelected(event: any) {
    console.log("ss image",event.target.files[0])
    this.proImage = event.target.files[0];
  }
}
