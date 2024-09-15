import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {DesignService} from "../../../../core/services/api/admin/design.service";
import {Router} from "@angular/router";
import {QuotationService} from "../../../../core/services/api/admin/quotation.service";
import {FormControl} from "@angular/forms";

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
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0

  type:string="PENDING"

  fontStyleControl = new FormControl('PENDING');
  ngOnInit(): void {
    this.fontStyleControl.valueChanges.pipe().subscribe(data=>{
      console.log("value change",data)
      if (data=='PENDING'){this.type = "PENDING"}
      if (data=='PROCESSING'){this.type = "PROCESSING"}
      if (data=='APPROVED'){this.type = "APPROVED"}
      if(data=='DELIVER') {this.type = "DELIVER"}
      if(data=='DELIVERED') {this.type = "DELIVERED"}
      if(data=='COMPLETED') {this.type = "COMPLETED"}
      if(data=='CANCELED') {this.type = "CANCELED"}
      this.getAll()

    })
    this.getAll()
  }

  getAll(){
        this.quotationService.getAllQuotation('ACTIVE',
          this.type,
          this.selectedPageIndex,
          this.selectedPageSize).pipe().subscribe(data=>{
          console.log("response=",data)
          if (data.code==200){
            this.quotationList = data.data['content']
          }
        })
  }
  view(id:any) {
    console.log("test work!!")
    this.router.navigate(['admin/quotation/view', id]);
  }
}
