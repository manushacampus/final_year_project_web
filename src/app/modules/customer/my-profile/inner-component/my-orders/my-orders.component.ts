import {Component, OnInit} from '@angular/core';
import {CProductService} from "../../../../../core/services/api/customer/c-product.service";
import {ToastrService} from "ngx-toastr";
import {COrderService} from "../../../../../core/services/api/customer/c-order.service";
import {MatDialog} from "@angular/material/dialog";
import {FeedabackComponent} from "../feedaback/feedaback.component";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit{
  constructor(public dialog:MatDialog,
              private cProductService:CProductService,
              private orderService:COrderService,
              private toastrService:ToastrService,) {
  }
  orderList:any;
  progressValue: number = 0;
  ngOnInit(): void {
    this.getAllOrderList()
  }
  progressBar(type:string){
    if (type=='PENDING'){
      return 20;
    }
    if (type=='APPROVED'){
      return 40;
    }
    if (type=='DELIVER'){
      return 60;
    }
    if (type=='DELIVERED'){
      return 70;
    }
    if (type=='CUSTOMER_CONFIRM'){
      return 100;
    }
    if (type=='MANAGER_CONFIRM'){
      return 100;
    }
    if (type=='COMPLETED'){
      return 100;
    }
    else {
      return 0;
    }

  }
  getAllOrderList(){
    this.orderService.getOrderByStatusAndType('ACTIVE','',0,100).pipe().subscribe(data=>{
      if (data.code==200){
        this.orderList =data.data['content']
        console.log("door lits pageble",data.data['content'] )
      }
    })
  }

  addNewSupplier() {
    this.dialog.open(FeedabackComponent,{
    }).afterClosed().subscribe(result=>{
    });
  }

}
