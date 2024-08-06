import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-job-image',
  templateUrl: './employee-job-image.component.html',
  styleUrls: ['./employee-job-image.component.scss']
})
export class EmployeeJobImageComponent implements OnInit{
  productImage!:File;
  constructor(public modalRef: MatDialogRef<EmployeeJobImageComponent>,
              private jobService:JobService,
              private dialog:MatDialog,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any
  ) {
  }

  ngOnInit(): void {

    }
  onFileSelected(event: any) {
    console.log("ss image",event.target.files[0])
    this.productImage = event.target.files[0];
  }
  uploadImage() {
    console.log("upload",this.data)
    if (this.productImage && this.productImage.name){
        this.jobService.doneJob(this.data.job,this.productImage).pipe().subscribe(data=>{
          console.log("response",data)
          this.toastrService.success("success")
          this.modalRef.close()
        },error => {
          this.toastrService.error("UnSuccess")
        })
    }
    else {
      this.toastrService.error("Please Upload the Product Image","Error")
    }

  }
}
