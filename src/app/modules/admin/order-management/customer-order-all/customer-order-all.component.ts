import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {QuotationService} from "../../../../core/services/api/admin/quotation.service";
import {Router} from "@angular/router";
import {OrdersService} from "../../../../core/services/api/admin/orders.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-customer-order-all',
  templateUrl: './customer-order-all.component.html',
  styleUrls: ['./customer-order-all.component.scss']
})
export class CustomerOrderAllComponent implements OnInit{
  constructor(private toastrService: ToastrService,
              private ordersService: OrdersService,
              private router:Router) {
  }
  orderList:any
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0

  type:string="PENDING"

  fontStyleControl = new FormControl('PENDING');

  ngOnInit(): void {
    this.fontStyleControl.valueChanges.pipe().subscribe(data=>{
      console.log("value change",data)
      if (data=='PENDING'){this.type = "PENDING"}
      if (data=='APPROVED'){this.type = "APPROVED"}
      if(data=='DELIVER') {this.type = "DELIVER"}
      if(data=='DELIVERED') {this.type = "DELIVERED"}
      if(data=='COMPLETED') {this.type = "COMPLETED"}
      if(data=='CANCELED') {this.type = "CANCELED"}
      this.getAll()

    })
    this.getAll()
  }

  getAll(){
    this.ordersService.getOrdersByStatusAndType( 'ACTIVE',
      this.type,
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("response=",data)
      if (data.code==200){
        this.orderList = data.data['content']
      }
    })
  }
  view(id:any) {
    console.log("test work!!")
    this.router.navigate(['admin/orders/view', id]);
  }
  accept(){

  }
}
