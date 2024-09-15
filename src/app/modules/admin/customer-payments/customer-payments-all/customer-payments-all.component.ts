import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {OrdersService} from "../../../../core/services/api/admin/orders.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {
  DeliveryManagementPaymentComponent
} from "../../delivery-management/delivery-management-payment/delivery-management-payment.component";
import {ThemePalette} from "@angular/material/core";
import {FormControl} from "@angular/forms";
import {PaymentService} from "../../../../core/services/api/admin/payment.service";
import {CustomerPaymentViewComponent} from "../customer-payment-view/customer-payment-view.component";

@Component({
  selector: 'app-customer-payments-all',
  templateUrl: './customer-payments-all.component.html',
  styleUrls: ['./customer-payments-all.component.scss']
})
export class CustomerPaymentsAllComponent implements OnInit {
  constructor(private toastrService: ToastrService,
              private paymentService: PaymentService,
              private router: Router,
              public dialog:MatDialog) {
  }

  paymentList: any
  totalPage = 0
  pageSize = [10, 20, 50]
  selectedPageSize: number = 10
  selectedPageIndex: number = 0

  type:string="ORDER"

  color: ThemePalette = 'accent';

  fontStyleControl = new FormControl('ORDER');


  ngOnInit(): void {
    this.getAll()
    this.fontStyleControl.valueChanges.pipe().subscribe(data=>{
      console.log("value change",data)
      if (data=='ORDER'){
        this.type = "ORDER"
      }
      if(data=='QUOTATION') {
        this.type = "QUOTATION"

      }
      this.getAll()

    })
  }

  getAll() {
    this.paymentService.getPaymentByStatusAndType('ACTIVE',
      this.type,
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data => {
      console.log("response=", data)
      if (data.code == 200) {
        this.paymentList = data.data['content']
        console.log("payment", this.paymentList)
      }
    })
  }

  view(invoice: any) {
    console.log("test work!!",invoice)
    this.dialog.open(CustomerPaymentViewComponent,{
      data: {
        data:invoice
      }
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }
}
