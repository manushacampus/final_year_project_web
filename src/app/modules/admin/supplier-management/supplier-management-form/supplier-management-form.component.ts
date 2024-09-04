import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {DesignService} from "../../../../core/services/api/admin/design.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SupplierService} from "../../../../core/services/api/admin/supplier.service";

@Component({
  selector: 'app-supplier-management-form',
  templateUrl: './supplier-management-form.component.html',
  styleUrls: ['./supplier-management-form.component.scss']
})
export class SupplierManagementFormComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<SupplierManagementFormComponent>,
              private supplierService:SupplierService,
              private toastrService:ToastrService) {
  }
  designForm!:FormGroup;

  ngOnInit(): void {
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

  saveSupplier(){
    if (this.designForm.valid){
      console.log("supplier",this.designForm.value)
      this.supplierService.registerSupplier(this.designForm.value).pipe().subscribe(data=>{
        if (data.code==200){
          this.toastrService.success("success")
          this.modalRef.close()
        }
        else {
          this.toastrService.error("unSuccess")
        }
      },error => {
        this.toastrService.error(error.error.message,"Error")
      })
    }
    else {
      this.toastrService.error("Please Fill The Required Field ","Error")
    }
  }


}
