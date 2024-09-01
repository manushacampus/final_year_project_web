import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {QuotationService} from "../../../../core/services/api/admin/quotation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quotation-management-view',
  templateUrl: './quotation-management-view.component.html',
  styleUrls: ['./quotation-management-view.component.scss']
})
export class QuotationManagementViewComponent {
  constructor(private toastrService: ToastrService,
              private quotationService: QuotationService,
              private router:Router) {
  }
  change(){
    this.quotationService.changeQuotationType("Test").pipe().subscribe(
      data=>{
        console.log("response=",data)
      }
    )
  }

}
