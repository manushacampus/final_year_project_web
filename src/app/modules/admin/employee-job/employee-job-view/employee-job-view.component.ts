import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";
import {ApprovalDialogComponent} from "../../../../commons/dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../../../commons/dialogs/approval-dialog/ApprovalDialogConfig";
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeJobImageComponent} from "../employee-job-image/employee-job-image.component";

@Component({
  selector: 'app-employee-job-view',
  templateUrl: './employee-job-view.component.html',
  styleUrls: ['./employee-job-view.component.scss']
})
export class EmployeeJobViewComponent implements OnInit{

  constructor(public modalRef: MatDialogRef<EmployeeJobViewComponent>,
              private jobService:JobService,
              private dialog:MatDialog,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any
  ) {
  }
  doorForm!:FormGroup;
  jobForm!:FormGroup;
  ngOnInit(): void {
    this.jobForm = new FormGroup({
      id:new FormControl(''),
      dueDate:new FormControl(''),
      qty:new FormControl(''),
      description:new FormControl(''),
      status:new FormControl(''),

    });
    this.doorForm = new FormGroup({
      id:new FormControl(''),
      name: new FormControl(''),
      code: new FormControl(''),
      type: new FormControl(''),
      height: new FormControl(0),
      width: new FormControl(0),
      doorColor:new FormControl(''),
      fillingType:new FormControl(''),
      glassThickness: new FormControl(0),
      boardThickness: new FormControl(0),
      glassColor:new FormControl(''),
      boardColor:new FormControl(''),
      typeOfBoard:new FormControl(''),
    });
    this.get();
    this.doorForm.disable()
    this.jobForm.disable()
  }
  get(){
    console.log("open modal data Job",this.data.data)
    console.log("open modal data stockItem",this.data.data.stockItem)
    console.log("open modal data Door",this.data.data.stockItem.door)
    this.jobForm.patchValue(this.data.data)
    this.doorForm.patchValue(this.data.data.stockItem.door)
  }
  takeAJob(job:any){
    console.log("iiii",job)
    this.dialog.open(ApprovalDialogComponent,{
      width:"350px",
      data: new ApprovalDialogConfig('Confirm','Take a Job','Are you sure you want to Take this?')
    }).afterClosed()?.pipe().subscribe(res=>{
      if (res){
        this.jobService.assignEmployeeForJob(job).pipe().subscribe(data=>{
          console.log("response",data)
          this.toastrService.success("success")
          this.modalRef.close()
        },error => {
          this.toastrService.error("UnSuccess")
        })
      }
    })

  }
  startJob(job_id:any){
    this.dialog.open(ApprovalDialogComponent,{
      width:"350px",
      data: new ApprovalDialogConfig('Confirm','Start a Job','Are you sure you want to Start Job?')
    }).afterClosed()?.pipe().subscribe(res=>{
      if (res){
        this.jobService.startJob(job_id).pipe().subscribe(data=>{
          console.log("response",data)
          this.toastrService.success("success")
          this.modalRef.close()
        },error => {
          this.toastrService.error("UnSuccess")
        })
      }
    })
  }
  doneJob(job:any){
    console.log("done ",job.creationType)
    if (job.creationType=="NEW"){
      this.dialog.open(ApprovalDialogComponent,{
        width:"350px",
        data: new ApprovalDialogConfig('Confirm','Done a Job','Are you sure you want to Done Job?')
      }).afterClosed()?.pipe().subscribe(res=>{
        if (res){
          this.dialog.open(EmployeeJobImageComponent, {
            data: {
              job:job.id
            }
          }).afterClosed().subscribe(result => {
            //after close
            this.modalRef.close()
          });
        }
      })
    }
    if (job.creationType=="PRODUCT"){
      this.jobService.doneJobNew(job.id).pipe().subscribe(data=>{
        console.log("response",data)
        this.toastrService.success("success")
        this.modalRef.close()
      },error => {
        this.toastrService.error("UnSuccess")
      })
    }


  }

}
