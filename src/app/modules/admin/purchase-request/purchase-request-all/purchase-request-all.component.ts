import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {MatTableDataSource} from "@angular/material/table";
import {
  InventoryOtherFormComponent
} from "../../inventory/inventory-other/inner-component/inventory-other-form/inventory-other-form.component";
import {PurchaseService} from "../../../../core/services/api/admin/purchase.service";
import {ApprovalDialogComponent} from "../../../../commons/dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../../../commons/dialogs/approval-dialog/ApprovalDialogConfig";
import {Router} from "@angular/router";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {
  UtilityManagementFormComponent
} from "../../utility-management/utility-management-form/utility-management-form.component";
import {GrnCreateComponent} from "../grn-create/grn-create.component";

@Component({
  selector: 'app-purchase-request-all',
  templateUrl: './purchase-request-all.component.html',
  styleUrls: ['./purchase-request-all.component.scss']
})
export class PurchaseRequestAllComponent implements OnInit{
  inventoryList:any[]=[]
  constructor(public dialog:MatDialog,
              private toastrService:ToastrService,
              private jobService:JobService,
              private inventoryService:InventoryService,
              private purchaseService:PurchaseService,
              private router:Router) {
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ['code', 'qty', 'creationType', 'supplier', 'dispatchQty', 'action'];
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  ngOnInit(): void {
    this.getAllPurchase()
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

  creatProduct(item:any){
    this.dialog.open(ApprovalDialogComponent,{
      width:"350px",
      data: new ApprovalDialogConfig('Confirm','Start a Job','If you want to Create This Product?')
    }).afterClosed()?.pipe().subscribe(res=>{
      if (res){
        this.jobService.createJobByStock(item.id).pipe().subscribe(data=>{
          if (data.code==200){
            console.log("create job by product",data )
            this.getAllPurchase()
            this.toastrService.success("Created Job..","Success")
          }
        },error => {
          this.toastrService.error("UnSuccessful..","Error")
        })
      }
    })
  }

  viewProduct(item:any){
    this.router.navigate(['admin/purchase/view', item]);
  }

  addNewGrn(id:any) {
    console.log("idddddddddd",id)
    this.dialog.open(GrnCreateComponent,{
      data: {
        data:id
      }
    }).afterClosed().subscribe(result=>{
      this.getAllPurchase()
    });
  }

}



