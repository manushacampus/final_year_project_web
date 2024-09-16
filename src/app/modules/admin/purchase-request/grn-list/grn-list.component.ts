import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../../../core/services/api/admin/employee.service";
import {ToastrService} from "ngx-toastr";
import {GrnService} from "../../../../core/services/api/admin/grn.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {UtilityBillViewComponent} from "../../utility-management/utility-bill-view/utility-bill-view.component";

@Component({
  selector: 'app-grn-list',
  templateUrl: './grn-list.component.html',
  styleUrls: ['./grn-list.component.scss']
})
export class GrnListComponent implements OnInit{

  grnList:any[]=[]
  id!: string;
  constructor(public dialog:MatDialog,
              private grnService:GrnService,
              private toastrService:ToastrService,
              private route: ActivatedRoute
              ) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id !== null ? id : '';
    if ( this.id!== null){
      this.getAll();
    }
  }
  getAll(){
    this.grnService.getAllGrn(this.id).pipe().subscribe((data:any)=>{
      console.log("data",data)
      this.grnList = data.data
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
      this.getAll();
    });
  }

  back() {
    window.history.back()
  }
}
