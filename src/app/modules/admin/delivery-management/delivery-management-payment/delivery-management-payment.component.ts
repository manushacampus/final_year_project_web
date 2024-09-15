import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrdersService} from "../../../../core/services/api/admin/orders.service";
import {QuotationService} from "../../../../core/services/api/admin/quotation.service";

@Component({
  selector: 'app-delivery-management-payment',
  templateUrl: './delivery-management-payment.component.html',
  styleUrls: ['./delivery-management-payment.component.scss']
})
export class DeliveryManagementPaymentComponent implements OnInit{
  invoice!:File;
  orderId!:string;
  constructor(public modalRef: MatDialogRef<DeliveryManagementPaymentComponent>,
              private ordersService: OrdersService,
              private quotationService: QuotationService,
              private to:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }
  detailsForm!:FormGroup;
  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      id:new FormControl(''),
      price:new FormControl(0.0,Validators.required),

    });
    console.log("hshs",this.data.type)
  }
  onFileSelected(event: any) {
    console.log("ss image",event.target.files[0])
    this.invoice = event.target.files[0];
  }
  completeOrder(){
    console.log("file",this.invoice)
    if (this.invoice!=null){
      if (this.data.type=='ORDER'){
        this.ordersService.completeOrder(this.data.data,this.invoice,this.detailsForm.get('price')?.value).pipe().subscribe(data=>{

        })
      }
      if (this.data.type=='QUOTATION'){
        this.quotationService.completeOrder(this.data.data,this.invoice,this.detailsForm.get('price')?.value).pipe().subscribe(data=>{

        })
      }

    }

  }

}
