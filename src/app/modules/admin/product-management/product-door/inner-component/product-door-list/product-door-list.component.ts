import {Component, OnInit} from '@angular/core';
import {DoorService} from "../../../../../../core/services/api/door.service";
import {StockItemService} from "../../../../../../core/services/api/admin/stock-item.service";
import {JobService} from "../../../../../../core/services/api/admin/job.service";
import {ApprovalDialogComponent} from "../../../../../../commons/dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../../../../../commons/dialogs/approval-dialog/ApprovalDialogConfig";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-door-list',
  templateUrl: './product-door-list.component.html',
  styleUrls: ['./product-door-list.component.scss']
})
export class ProductDoorListComponent implements OnInit{
  constructor(private doorService:DoorService,
              private stockService:StockItemService,
              private jobService:JobService,
              public dialog:MatDialog,
              private toastrService:ToastrService,) {
  }
  productDoorList:any[]=[]
  ngOnInit(): void {
    this.getAllDoorList()
  }
  getAllDoorList(){
    this.stockService.getStockItemList(0,10,'ACTIVE','DOOR').pipe().subscribe(data=>{
      if (data.code==200){
        this.productDoorList =data.data['content']
        console.log("door lits pageble",data.data['content'] )
      }
    })
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
            this.toastrService.success("Created Job..","Success")
          }
        },error => {
          this.toastrService.error("UnSuccessful..","Error")
        })
      }
    })
  }



}
