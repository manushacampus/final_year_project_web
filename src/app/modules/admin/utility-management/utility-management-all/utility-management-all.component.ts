import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SalaryAddComponent} from "../../salary-management/salary-add/salary-add.component";
import {UtilityManagementFormComponent} from "../utility-management-form/utility-management-form.component";

@Component({
  selector: 'app-utility-management-all',
  templateUrl: './utility-management-all.component.html',
  styleUrls: ['./utility-management-all.component.scss']
})
export class UtilityManagementAllComponent implements OnInit{

  constructor(public dialog:MatDialog) {
  }

  addNewSupplier() {
    this.dialog.open(UtilityManagementFormComponent,{
    }).afterClosed().subscribe(result=>{
    });
  }

  ngOnInit(): void {

  }

}
