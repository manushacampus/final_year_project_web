import { Component } from '@angular/core';
import {
  SupplierManagementFormComponent
} from "../supplier-management/supplier-management-form/supplier-management-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-salary-management',
  templateUrl: './salary-management.component.html',
  styleUrls: ['./salary-management.component.scss']
})
export class SalaryManagementComponent {

  constructor(public dialog:MatDialog) {
  }
  addNewSupplier() {
    this.dialog.open(SupplierManagementFormComponent,{
    }).afterClosed().subscribe(result=>{
    });
  }
}
