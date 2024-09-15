import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SalaryManagementComponent} from "../salary-management.component";
import {EmployeeService} from "../../../../core/services/api/admin/employee.service";
import {SalaryService} from "../../../../core/services/api/admin/salary.service";
@Component({
  selector: 'app-salary-add',
  templateUrl: './salary-add.component.html',
  styleUrls: ['./salary-add.component.scss']
})
export class SalaryAddComponent implements OnInit {

  constructor(public modalRef: MatDialogRef<SalaryManagementComponent>,
              private salaryService:SalaryService,
              private toastrService:ToastrService,
              private employeeService:EmployeeService
              ) {
  }
  detailsForm!:FormGroup;
  image!:File;
  employeeList!:any;
  selectedEmployee!:any;
  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      id:new FormControl(''),
      employee:new FormControl('',Validators.required),
      salary:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required),
      additional:new FormControl('',),
      status:new FormControl('',),
      invoice:new FormControl('',),
    });
    this.getAllEmployee()
    this.detailsForm.get('employee')?.valueChanges.subscribe(data=>{
      this.employeeService.getEmployeeById(data).pipe().subscribe(data=>{
        console.log("sdasdas",data.data)
        this.detailsForm.get('salary')?.setValue(data.data.salary)
        this.detailsForm.get('salary')?.disable()
      })

    })
  }
  getAllEmployee(){
    this.employeeService.getEmployeeList(0,100).pipe().subscribe((data:any)=>{
      console.log("data",data.data['content'])
      this.employeeList = data.data['content']
    })
  }

  saveSalary(){
    if (this.detailsForm.valid){
      this.detailsForm.get('salary')?.enable()
      console.log("Salary",this.detailsForm.value)
      this.salaryService.saveSalary(this.detailsForm.value,this.image,this.detailsForm.get('employee')?.value).pipe().subscribe(data=>{
        if (data.code==200){
          this.toastrService.success("success")
          this.modalRef.close()
        }
        else {
          this.toastrService.error("unSuccess")
        }
      },error => {
        this.toastrService.error(error.error.message,"Error")
      })
    }
    else {
      this.toastrService.error("Please Fill The Required Field ","Error")
    }
  }

  onFileSelected(event: any) {
    console.log("ss image",event.target.files[0])
    this.image = event.target.files[0];
  }

  getEmp(employee:any) {

  }
}
