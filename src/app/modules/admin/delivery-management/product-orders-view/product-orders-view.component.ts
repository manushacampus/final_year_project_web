import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {OrdersService} from "../../../../core/services/api/admin/orders.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-orders-view',
  templateUrl: './product-orders-view.component.html',
  styleUrls: ['./product-orders-view.component.scss']
})
export class ProductOrdersViewComponent implements OnInit{
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
}
