import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {MatTableDataSource} from "@angular/material/table";
import {
  InventoryOtherFormComponent
} from "../../inventory/inventory-other/inner-component/inventory-other-form/inventory-other-form.component";

@Component({
  selector: 'app-purchase-request-all',
  templateUrl: './purchase-request-all.component.html',
  styleUrls: ['./purchase-request-all.component.scss']
})
export class PurchaseRequestAllComponent implements OnInit{
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
  addNewSupplier() {
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

  onRowClick(row: any) {

  }
}



