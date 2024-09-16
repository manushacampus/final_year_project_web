import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SupplierService} from "../../../../core/services/api/admin/supplier.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GrnService} from "../../../../core/services/api/admin/grn.service";

@Component({
  selector: 'app-grn-create',
  templateUrl: './grn-create.component.html',
  styleUrls: ['./grn-create.component.scss']
})
export class GrnCreateComponent implements OnInit{

  constructor(public modalRef: MatDialogRef<GrnCreateComponent>,
              private grnService:GrnService,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }

  detailsForm!:FormGroup;
  image!:File;
  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      id:new FormControl(''),
      qty:new FormControl('',Validators.required),
      payment:new FormControl('',Validators.required),
      invoiceNo:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required),
      invoice:new FormControl('',),

    });
    console.log("creeeee iddd",this.data.data)
  }

  saveGrn(){
    if (this.detailsForm.valid){
      console.log("Purchase",this.detailsForm.value)
      this.grnService.saveGrn(this.detailsForm.value,this.image,this.data.data).pipe().subscribe(data=>{
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
