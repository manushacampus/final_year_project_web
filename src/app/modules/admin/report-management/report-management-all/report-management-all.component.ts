import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SalaryAddComponent} from "../../salary-management/salary-add/salary-add.component";

@Component({
  selector: 'app-report-management-all',
  templateUrl: './report-management-all.component.html',
  styleUrls: ['./report-management-all.component.scss']
})
export class ReportManagementAllComponent implements OnInit{

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
