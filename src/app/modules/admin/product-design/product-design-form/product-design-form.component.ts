import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DesignService} from "../../../../core/services/api/admin/design.service";

@Component({
  selector: 'app-product-design-form',
  templateUrl: './product-design-form.component.html',
  styleUrls: ['./product-design-form.component.scss']
})
export class ProductDesignFormComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<ProductDesignFormComponent>,
              private designService:DesignService,
              private toastrService:ToastrService) {
  }
  designImage!:File;
  designForm!:FormGroup;

  ngOnInit(): void {
    this.designForm = new FormGroup({
      id:new FormControl(''),
      name:new FormControl('',Validators.required),
      code:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required),
      image:new FormControl(''),

    });
  }

  saveDesign(){
    if (this.designForm.valid){
      this.designService.addDesign(this.designForm.value,this.designImage).pipe().subscribe(data=>{
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
    this.designImage = event.target.files[0];
  }

}
