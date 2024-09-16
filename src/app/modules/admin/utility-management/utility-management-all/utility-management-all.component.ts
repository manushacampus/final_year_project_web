import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SalaryAddComponent} from "../../salary-management/salary-add/salary-add.component";
import {UtilityManagementFormComponent} from "../utility-management-form/utility-management-form.component";
import {UtilityService} from "../../../../core/services/api/admin/utility.service";
import {ToastrService} from "ngx-toastr";
import {
  CustomerPaymentViewComponent
} from "../../customer-payments/customer-payment-view/customer-payment-view.component";
import {UtilityBillViewComponent} from "../utility-bill-view/utility-bill-view.component";

@Component({
  selector: 'app-utility-management-all',
  templateUrl: './utility-management-all.component.html',
  styleUrls: ['./utility-management-all.component.scss']
})
export class UtilityManagementAllComponent implements OnInit{

  constructor(public dialog:MatDialog,
              private utilityService:UtilityService,
              private toastrService:ToastrService) {
  }
  dataList:any
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0

  addNewSupplier() {
    this.dialog.open(UtilityManagementFormComponent,{
    }).afterClosed().subscribe(result=>{
      this.getUtility()
    });
  }

  ngOnInit(): void {
    this.getUtility()

  }
  getUtility() {
    this.utilityService.getAllUtilityByStatus('ACTIVE',
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("response=",data)
      if (data.code==200){
        this.dataList = data.data['content']
      }
    })
  }

  view(invoice: any) {
    console.log("test work!!",invoice)
    this.dialog.open(UtilityBillViewComponent,{
      data: {
        data:invoice
      }
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

}
