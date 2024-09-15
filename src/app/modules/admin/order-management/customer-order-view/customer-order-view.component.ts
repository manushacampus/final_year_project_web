import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {QuotationService} from "../../../../core/services/api/admin/quotation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdersService} from "../../../../core/services/api/admin/orders.service";

@Component({
  selector: 'app-customer-order-view',
  templateUrl: './customer-order-view.component.html',
  styleUrls: ['./customer-order-view.component.scss']
})
export class CustomerOrderViewComponent implements OnInit{
  stockList!:any;
  order!:any;
  orderId!: string;
  customer!: any;
  constructor(private toastrService: ToastrService,
              private ordersService: OrdersService,
              private router:Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderId = id !== null ? id : '';
    if ( this.orderId!== null){
      this.getOrderStockById();
    }
  }

  getOrderStockById(){
    this.ordersService.getOrdersStockById(this.orderId).pipe().subscribe(data=>{
      if (data.code==200){
        this.order = data.data.order
        this.customer = data.data.order.customer.user
        this.stockList = data.data.stockItem
        console.log("Order Stock List",this.stockList)
        console.log("Order  ",this.order )
        console.log("Customer  ",this.customer )
      }

    })
  }
  accept() {
    console.log("Oder ID",this.orderId)
    this.ordersService.acceptOrder(this.orderId).pipe().subscribe(data=>{
      if (data.code==200){
        this.toastrService.success("Accepted..")
      }

    },error => {
      this.toastrService.error(error.error.message,"Error")
    })
  }

  cancel() {
    console.log("Oder ID",this.orderId)
    this.ordersService.cancelOrder(this.orderId).pipe().subscribe(data=>{
      if (data.code==200){
        this.toastrService.success("Cancel..")
      }

    },error => {
      this.toastrService.error(error.error.message,"Error")
    })
  }
}
