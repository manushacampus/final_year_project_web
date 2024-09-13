import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryBarFormComponent} from "./inner-component/inventory-bar-form/inventory-bar-form.component";
import {MatTableDataSource} from "@angular/material/table";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {InventoryPurchaseRequestComponent} from "../inventory-purchase-request/inventory-purchase-request.component";

@Component({
  selector: 'app-inventory-bar',
  templateUrl: './inventory-bar.component.html',
  styleUrls: ['./inventory-bar.component.scss']
})
export class InventoryBarComponent implements OnInit{
  inventoryList:any[]=[]
  constructor(public dialog:MatDialog,
              private toastrService:ToastrService,
              private inventoryService:InventoryService) {
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ['code','sectionCode','creationType','color', 'type', 'qty', 'action'];
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  ngOnInit(): void {
    this.getAllBar()
  }
  addNewBar() {
    this.dialog.open(InventoryBarFormComponent,{
      data: {
        type:"JOB"}
    }).afterClosed().subscribe(result=>{
    });
  }
  onPageChange(event: any) {
    console.log("event",event)
    this.selectedPageIndex = event.pageIndex;
    this.selectedPageSize = event.pageSize;
    this.getAllBar()
  }
  getAllBar(){
    this.inventoryService.getInventoryByType(
      "BAR",
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("bar-all",data.data)
      this.dataSource.data = data.data['content']
      this.totalPage = data.data.totalElements
    })
  }

  onRowClick(row: any) {

  }

  enter(element:any) {
    console.log("enter",element)
    this.dialog.open(InventoryPurchaseRequestComponent,{
      data: {
        data:element}
    }).afterClosed().subscribe(result=>{
    });
  }
}
