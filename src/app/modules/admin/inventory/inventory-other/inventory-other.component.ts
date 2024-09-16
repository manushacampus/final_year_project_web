import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {MatTableDataSource} from "@angular/material/table";
import {InventoryOtherFormComponent} from "./inner-component/inventory-other-form/inventory-other-form.component";
import {InventoryPurchaseRequestComponent} from "../inventory-purchase-request/inventory-purchase-request.component";

@Component({
  selector: 'app-inventory-other',
  templateUrl: './inventory-other.component.html',
  styleUrls: ['./inventory-other.component.scss']
})
export class InventoryOtherComponent implements OnInit{
  inventoryList:any[]=[]
  constructor(public dialog:MatDialog,
              private toastrService:ToastrService,
              private inventoryService:InventoryService) {
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ['code','name','type', 'qty','price', 'action'];
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  ngOnInit(): void {
    this.getAllBar()
  }
  addNewOther() {
    this.dialog.open(InventoryOtherFormComponent,{
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
      "OTHER",
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("board-all",data.data)
      this.dataSource.data = data.data['content']
      this.totalPage = data.data.totalElements
    })
  }
  purchaseRequest(element:any) {
    console.log("enter",element)
    this.dialog.open(InventoryPurchaseRequestComponent,{
      data: {
        data:element}
    }).afterClosed().subscribe(result=>{
    });
  }

  onRowClick(row: any) {

  }
}
