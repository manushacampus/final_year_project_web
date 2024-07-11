import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {JobService} from "../../../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-job-edit-view',
  templateUrl: './job-edit-view.component.html',
  styleUrls: ['./job-edit-view.component.scss']
})
export class JobEditViewComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<JobEditViewComponent>,
              private jobService:JobService,
              private to:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }
  doorForm!:FormGroup;
  jobForm!:FormGroup;
  ngOnInit(): void {
    this.jobForm = new FormGroup({
      id:new FormControl(''),
      dueDate:new FormControl('',Validators.required),
      qty:new FormControl('',Validators.required),
      description:new FormControl(''),
      status:new FormControl(''),

    });
    this.doorForm = new FormGroup({
      id:new FormControl(''),
      name: new FormControl('',Validators.required),
      code: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required),
      height: new FormControl(0,Validators.required),
      width: new FormControl(0,Validators.required),
      doorColor:new FormControl(''),
      fillingType:new FormControl('',Validators.required),
      glassThickness: new FormControl(0),
      boardThickness: new FormControl(0),
      glassColor:new FormControl(''),
      boardColor:new FormControl(''),
      typeOfBoard:new FormControl(''),
    });
    this.get();
    this.jobForm.patchValue(this.data.data)
    this.doorForm.patchValue(this.data.data.stockItem.door)
    if (this.data.data.status=="INACTIVE"){
      this.jobForm.disable()
      this.doorForm.disable()
    }
  }
  get(){
    console.log("open modal data",this.data.data)
    console.log("open modal data door",this.data.data.stockItem.door)
  }
  updateJobDoor() {
    if (this.jobForm.valid && this.doorForm.valid) {
      this.jobService.updateJobDoor(this.jobForm, this.doorForm).pipe().subscribe(data => {
        if (data.code == 200) {
          this.to.success("Success")
          this.modalRef.close()
        } else {
          this.to.error("UnSuccess")
        }
      }, error => {
        this.to.error(error.error.message, "Error ")
      })
    }
    else {
      this.to.error("Please Fill The Required Field ","Error")
    }
  }
}
