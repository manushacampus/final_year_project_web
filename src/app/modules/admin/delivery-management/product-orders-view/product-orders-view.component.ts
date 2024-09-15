import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {OrdersService} from "../../../../core/services/api/admin/orders.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {JobEditViewComponent} from "../../jobs/job-all/inner-component/job-edit-view/job-edit-view.component";
import {DeliveryManagementPaymentComponent} from "../delivery-management-payment/delivery-management-payment.component";

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
              private route: ActivatedRoute,
              public dialog:MatDialog,) {
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
  deliver() {
    console.log("Oder ID",this.orderId)
    this.ordersService.deliverOrder(this.orderId).pipe().subscribe(data=>{
      if (data.code==200){
        this.toastrService.success("Delivered..")
      }

    },error => {
      this.toastrService.error(error.error.message,"Error")
    })
  }
  delivered() {
    console.log("Oder ID",this.orderId)
    this.ordersService.deliveredOrder(this.orderId).pipe().subscribe(data=>{
      if (data.code==200){
        this.toastrService.success("Delivered..")
      }

    },error => {
      this.toastrService.error(error.error.message,"Error")
    })
  }

  cancel() {

      window.history.back();

  }

  complete() {
    this.dialog.open(DeliveryManagementPaymentComponent,{
      data: {
        data:this.orderId
      }
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }
}
