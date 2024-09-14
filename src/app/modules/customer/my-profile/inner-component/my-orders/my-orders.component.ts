import {Component, OnInit} from '@angular/core';
import {DoorService} from "../../../../../core/services/api/door.service";
import {CProductService} from "../../../../../core/services/api/customer/c-product.service";
import {JobService} from "../../../../../core/services/api/admin/job.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {COrderService} from "../../../../../core/services/api/customer/c-order.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit{
  constructor(
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
    if (type=='DELIVERY'){
      return 60;
    }
    if (type=='CUSTOMER_CONFIRM'){
      return 80;
    }
    if (type=='MANAGER_CONFIRM'){
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

}
