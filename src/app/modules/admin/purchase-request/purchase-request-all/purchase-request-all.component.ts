import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {MatTableDataSource} from "@angular/material/table";
import {
  InventoryOtherFormComponent
} from "../../inventory/inventory-other/inner-component/inventory-other-form/inventory-other-form.component";
import {PurchaseService} from "../../../../core/services/api/admin/purchase.service";

@Component({
  selector: 'app-purchase-request-all',
  templateUrl: './purchase-request-all.component.html',
  styleUrls: ['./purchase-request-all.component.scss']
})
export class PurchaseRequestAllComponent implements OnInit{
  inventoryList:any[]=[]
  constructor(public dialog:MatDialog,
              private toastrService:ToastrService,
              private inventoryService:InventoryService,
              private purchaseService:PurchaseService) {
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ['code','creationType', 'type', 'qty', 'action'];
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  ngOnInit(): void {
    this.getAllPurchase()
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
    this.getAllPurchase()
  }
  getAllPurchase(){
    this.purchaseService.getPurchaseByStatus(
      "ACTIVE",
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("purchase-all",data.data)
      this.dataSource.data = data.data['content']
      this.totalPage = data.data.totalElements
    })
  }

  onRowClick(row: any) {

  }
}



