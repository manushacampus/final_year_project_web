import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {QuotationService} from "../../../../core/services/api/admin/quotation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {toJSDate} from "@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar";

@Component({
  selector: 'app-quotation-management-view',
  templateUrl: './quotation-management-view.component.html',
  styleUrls: ['./quotation-management-view.component.scss']
})
export class QuotationManagementViewComponent implements OnInit{
  quotationId!: string;
  quotationData!:any;
  customer!: any;
  doorQuotation!:any;
  windowQuotation!:any;
  constructor(private toastrService: ToastrService,
              private quotationService: QuotationService,
              private router:Router,
              private route: ActivatedRoute) {
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

  approve() {

    this.quotationService.approveQuotation(this.quotationId).pipe().subscribe(data=>{
      console.log("Response",data)
    })
  }
}
