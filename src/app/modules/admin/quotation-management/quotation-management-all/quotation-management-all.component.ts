import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {DesignService} from "../../../../core/services/api/admin/design.service";
import {Router} from "@angular/router";
import {QuotationService} from "../../../../core/services/api/admin/quotation.service";

@Component({
  selector: 'app-quotation-management-all',
  templateUrl: './quotation-management-all.component.html',
  styleUrls: ['./quotation-management-all.component.scss']
})
export class QuotationManagementAllComponent implements OnInit{
  constructor(private toastrService: ToastrService,
              private quotationService: QuotationService,
              private router:Router) {
  }
  quotationList:any
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
        this.quotationService.getAllQuotation('ACTIVE').pipe().subscribe(data=>{
          console.log("response=",data)
          if (data.code==200){
            this.quotationList = data.data
          }
        })
  }
}
