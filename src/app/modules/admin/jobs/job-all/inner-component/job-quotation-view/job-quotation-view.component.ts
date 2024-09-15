import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {JobService} from "../../../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-job-quotation-view',
  templateUrl: './job-quotation-view.component.html',
  styleUrls: ['./job-quotation-view.component.scss']
})
export class JobQuotationViewComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<JobQuotationViewComponent>,
              private jobService:JobService,
              private to:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }
  jobForm!:FormGroup;
  quotation!:any;
  quotationData!:any;
  design!:any;
  ngOnInit(): void {
    this.jobForm = new FormGroup({
      id:new FormControl(''),
      dueDate:new FormControl('',Validators.required),
      qty:new FormControl('',Validators.required),
      description:new FormControl(''),
      status:new FormControl(''),

    });
    this.jobForm.patchValue(this.data.data)
    this.quotation = this.data.data.quotation
    if (this.data.data.type=='DOOR'){
      this.quotationData =this.data.data.quotation.doorQuotation
      this.design  = this.data.data.quotation.doorQuotation.design
    }
    if (this.data.data.type=='WINDOW'){
      this.quotationData=this.data.data.quotation.windowQuotation
      this.design  = this.data.data.quotation.windowQuotation.design
    }
    console.log("quotation",this.quotationData)
    this.jobForm.disable()
  }

  updateJobDoor() {

  }
}
