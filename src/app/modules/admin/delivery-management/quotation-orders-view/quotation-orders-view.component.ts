import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {QuotationService} from "../../../../core/services/api/admin/quotation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DeliveryManagementPaymentComponent} from "../delivery-management-payment/delivery-management-payment.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-quotation-orders-view',
  templateUrl: './quotation-orders-view.component.html',
  styleUrls: ['./quotation-orders-view.component.scss']
})
export class QuotationOrdersViewComponent implements OnInit{
  quotationId!: string;
  quotationData!:any;
  customer!: any;
  doorQuotation!:any;
  windowQuotation!:any;
  constructor(private toastrService: ToastrService,
              private quotationService: QuotationService,
              private router:Router,
              private route: ActivatedRoute,
              public dialog:MatDialog) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quotationId = id !== null ? id : '';
    if ( this.quotationId!== null){
      this.getQuotationById();
    }
  }
  change(type:string){
    this.quotationService.changeQuotationType(this.quotationId,type).pipe().subscribe(
      data=>{
        console.log("response=",data)
        this.toastrService.success("Canceled..")
        window.history.back()
      }
    )
  }
  getQuotationById(){
    this.quotationService.getQuotationById(this.quotationId).pipe().subscribe(data=>{
      console.log("quotation id",data.data)
      this.quotationData = data.data
      this.customer = data.data.customer.user
      if (data.data.type=='DOOR'){
        this.doorQuotation = data.data.doorQuotation
      }
      if (data.data.type=='WINDOWS'){
        this.windowQuotation = data.data.windowQuotation
      }
      console.log("Quotation List",this.quotationData)
      console.log("Quotation Door  ",this.doorQuotation )
      console.log("Quotation Window  ",this.windowQuotation )
    })
  }


  cancel() {

  }

  deliver() {
    console.log("quotation ID",this.quotationId)
    this.quotationService.deliverOrder(this.quotationId).pipe().subscribe(data=>{
      if (data.code==200){
        this.toastrService.success("Delivered..")
        window.history.back()
      }

    },error => {
      this.toastrService.error(error.error.message,"Error")
    })
  }

  delivered() {
    console.log("Oder ID",this.quotationId)
    this.quotationService.deliveredOrder(this.quotationId).pipe().subscribe(data=>{
      if (data.code==200){
        this.toastrService.success("Delivered..")
        window.history.back()
      }

    },error => {
      this.toastrService.error(error.error.message,"Error")
    })
  }

  complete() {
    this.dialog.open(DeliveryManagementPaymentComponent,{
      data: {
        data:this.quotationId,
        type:"QUOTATION",
        total:this.quotationData.total
      }
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
      window.history.back()
    });
  }

}
