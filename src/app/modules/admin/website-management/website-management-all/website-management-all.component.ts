import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WebsiteManagementFormComponent} from "../website-management-form/website-management-form.component";

@Component({
  selector: 'app-website-management-all',
  templateUrl: './website-management-all.component.html',
  styleUrls: ['./website-management-all.component.scss']
})
export class WebsiteManagementAllComponent implements OnInit{
  constructor(public dialog:MatDialog) {
  }

  addNewSupplier() {
    this.dialog.open(WebsiteManagementFormComponent,{
    }).afterClosed().subscribe(result=>{
    });
  }

  ngOnInit(): void {

  }
}
