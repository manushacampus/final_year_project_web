import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SalaryManagementComponent} from "../../../../admin/salary-management/salary-management.component";
import {SupplierService} from "../../../../../core/services/api/admin/supplier.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {COrderService} from "../../../../../core/services/api/customer/c-order.service";

@Component({
  selector: 'app-feedaback',
  templateUrl: './feedaback.component.html',
  styleUrls: ['./feedaback.component.scss']
})
export class FeedabackComponent implements OnInit{

  constructor(public modalRef: MatDialogRef<FeedabackComponent>,
              private cOrderService:COrderService,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }

  designForm!:FormGroup;
  proImage!:File;
  productList!:any;

  ngOnInit(): void {
    this.getProduct()
    this.designForm = new FormGroup({
      id:new FormControl(''),
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      supplierType:new FormControl('',Validators.required),
      nic:new FormControl('',Validators.required),
      contact:new FormControl('',Validators.required),

    });
  }

  getProduct(){
    this.cOrderService.getProductByOrder(this.data.id).pipe().subscribe(data=>{
      if (data.code==200){
        console.log("response",data)
        this.productList = data.data
      }
    })
  }

  onFileSelected(event: any) {
    console.log("ss image",event.target.files[0])
    this.proImage = event.target.files[0];
  }

}
