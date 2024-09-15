import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CDesignService} from "../../../../../core/services/api/customer/c-design.service";
import {CQuotationService} from "../../../../../core/services/api/customer/c-quotation.service";
import {FeedabackComponent} from "../feedaback/feedaback.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-my-quotation',
  templateUrl: './my-quotation.component.html',
  styleUrls: ['./my-quotation.component.scss']
})
export class MyQuotationComponent implements OnInit{
  constructor(public dialog:MatDialog,
              private router:Router,
              private designService: CDesignService,
              private quotationService: CQuotationService,
              private route: ActivatedRoute) {
  }
  quotationList:any;
  ngOnInit(): void {
    this.getQuotation()
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
  getQuotation(){
    this.quotationService.getQuotation().pipe().subscribe(data=>{
      this.quotationList = data.data
    })
  }

  addNewSupplier() {
    this.dialog.open(FeedabackComponent,{
    }).afterClosed().subscribe(result=>{
    });
  }

}
