import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {SalaryManagementComponent} from "../../salary-management/salary-management.component";
import {SupplierService} from "../../../../core/services/api/admin/supplier.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UtilityManagementComponent} from "../utility-management.component";
import {UtilityService} from "../../../../core/services/api/admin/utility.service";

@Component({
  selector: 'app-utility-management-form',
  templateUrl: './utility-management-form.component.html',
  styleUrls: ['./utility-management-form.component.scss']
})
export class UtilityManagementFormComponent implements OnInit{

  constructor(public modalRef: MatDialogRef<UtilityManagementFormComponent>,
              private utilityService:UtilityService,
              private toastrService:ToastrService) {
  }

  detailsForm!:FormGroup;
  image!:File;


  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      id:new FormControl(''),
      name:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required),
      billNo:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required),
      payment:new FormControl('',Validators.required),
      bill:new FormControl('',),
      status:new FormControl(''),

    });
  }

  saveUtility(){
    if (this.detailsForm.valid){
      console.log("Utilty",this.detailsForm.value)
      this.utilityService.saveUtility(this.detailsForm.value,this.image).pipe().subscribe(data=>{
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

  onFileSelected(event: any) {
    console.log("ss image",event.target.files[0])
    this.image = event.target.files[0];
  }
}
