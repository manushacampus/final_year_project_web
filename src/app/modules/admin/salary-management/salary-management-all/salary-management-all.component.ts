import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SupplierService} from "../../../../core/services/api/admin/supplier.service";
import {SalaryAddComponent} from "../salary-add/salary-add.component";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../../../core/services/api/admin/employee.service";
import {SalaryService} from "../../../../core/services/api/admin/salary.service";
import {UtilityBillViewComponent} from "../../utility-management/utility-bill-view/utility-bill-view.component";

@Component({
  selector: 'app-salary-management-all',
  templateUrl: './salary-management-all.component.html',
  styleUrls: ['./salary-management-all.component.scss']
})
export class SalaryManagementAllComponent implements OnInit{

  constructor(public dialog:MatDialog,
              private employeeService:EmployeeService,
              private salaryService:SalaryService) {
  }
  detailsForm!:FormGroup;
  employeeId:string="";
  employeeList!:any;
  salaryList!:any;
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  addNewSupplier() {
    this.dialog.open(SalaryAddComponent,{
    }).afterClosed().subscribe(result=>{
      this.getSalary();
    });
  }

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      id:new FormControl(''),
      date:new FormControl('',Validators.required),
      employeeID:new FormControl('',Validators.required)

    });
    this.detailsForm.valueChanges.pipe().subscribe(data=>{
      this.getSalary(this.detailsForm.get('employeeID')?.value,this.detailsForm.get('date')?.value);
    })
    this.getAllEmployee();
    this.getSalary();
  }

  getSalary( employeeId?: string, date?: string) {
    this.salaryService.getAllSalaryByStatus('ACTIVE',
      this.selectedPageIndex,
      this.selectedPageSize,
      employeeId,
      date
      ).pipe().subscribe(data=>{
      console.log("Salary response=",data)
      if (data.code==200){
        this.salaryList = data.data['content']
      }
    })
  }

  getAllEmployee(){
    this.employeeService.getEmployeeList(0,100).pipe().subscribe((data:any)=>{
      console.log("data",data.data['content'])
      this.employeeList = data.data['content']
    })
  }
  view(invoice: any) {
    console.log("test work!!",invoice)
    this.dialog.open(UtilityBillViewComponent,{
      data: {
        data:invoice
      }
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
      this.getSalary();
    });
  }

  clear() {
    this.detailsForm.get('employeeID')?.setValue("")
    this.detailsForm.get('date')?.setValue("")
  }
}
