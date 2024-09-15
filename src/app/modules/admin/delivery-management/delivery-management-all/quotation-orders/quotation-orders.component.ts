import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {SupplierService} from "../../../../../core/services/api/admin/supplier.service";
import {MatTableDataSource} from "@angular/material/table";
import {
  SupplierManagementFormComponent
} from "../../../supplier-management/supplier-management-form/supplier-management-form.component";
import {QuotationService} from "../../../../../core/services/api/admin/quotation.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-quotation-orders',
  templateUrl: './quotation-orders.component.html',
  styleUrls: ['./quotation-orders.component.scss']
})
export class QuotationOrdersComponent implements OnInit{
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
