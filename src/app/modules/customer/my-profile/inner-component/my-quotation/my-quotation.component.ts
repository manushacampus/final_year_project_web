import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CDesignService} from "../../../../../core/services/api/customer/c-design.service";
import {CQuotationService} from "../../../../../core/services/api/customer/c-quotation.service";

@Component({
  selector: 'app-my-quotation',
  templateUrl: './my-quotation.component.html',
  styleUrls: ['./my-quotation.component.scss']
})
export class MyQuotationComponent implements OnInit{
  constructor(private router:Router,
              private designService: CDesignService,
              private quotationService: CQuotationService,
              private route: ActivatedRoute) {
  }
  quotationList:any;
  ngOnInit(): void {
    this.getQuotation()
  }
  getQuotation(){
    this.quotationService.getQuotation().pipe().subscribe(data=>{
      this.quotationList = data.data
    })
  }

}
