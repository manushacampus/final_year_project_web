import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {MatTableDataSource} from "@angular/material/table";
import {
  InventoryBarFormComponent
} from "../inventory-bar/inner-component/inventory-bar-form/inventory-bar-form.component";
import {InventoryBoardFormComponent} from "./inner-component/inventory-board-form/inventory-board-form.component";
import {InventoryPurchaseRequestComponent} from "../inventory-purchase-request/inventory-purchase-request.component";

@Component({
  selector: 'app-inventory-board',
  templateUrl: './inventory-board.component.html',
  styleUrls: ['./inventory-board.component.scss']
})
export class InventoryBoardComponent implements OnInit{
  inventoryList:any[]=[]
  constructor(public dialog:MatDialog,
              private toastrService:ToastrService,
              private inventoryService:InventoryService) {
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ['code','creationType', 'type', 'qty', 'action'];
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  ngOnInit(): void {
    this.getAllBar()
  }
  addNewBar() {
    this.dialog.open(InventoryBoardFormComponent,{
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
      "BOARD",
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
