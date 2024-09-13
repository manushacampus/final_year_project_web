import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../../../../core/services/api/admin/employee.service";
import {ToastrService} from "ngx-toastr";
import {
  SupplierManagementFormComponent
} from "../../supplier-management/supplier-management-form/supplier-management-form.component";
import {MatDialog} from "@angular/material/dialog";
import {SupplierService} from "../../../../core/services/api/admin/supplier.service";
import {SalaryAddComponent} from "../salary-add/salary-add.component";

@Component({
  selector: 'app-salary-management-all',
  templateUrl: './salary-management-all.component.html',
  styleUrls: ['./salary-management-all.component.scss']
})
export class SalaryManagementAllComponent implements OnInit{

  constructor(public dialog:MatDialog) {
  }

  addNewSupplier() {
    this.dialog.open(SalaryAddComponent,{
    }).afterClosed().subscribe(result=>{
    });
  }

  ngOnInit(): void {

  }
}
