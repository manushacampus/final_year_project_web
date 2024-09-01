import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {JobDoorComponent} from "../job-door/job-door.component";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {MatTableDataSource} from "@angular/material/table";
import {ThemePalette} from "@angular/material/core";
import {JobEditViewComponent} from "./inner-component/job-edit-view/job-edit-view.component";
import {ToastrService} from "ngx-toastr";
import {ApprovalDialogComponent} from "../../../../commons/dialogs/approval-dialog/approval-dialog.component";
import {ApprovalDialogConfig} from "../../../../commons/dialogs/approval-dialog/ApprovalDialogConfig";

@Component({
  selector: 'app-job-all',
  templateUrl: './job-all.component.html',
  styleUrls: ['./job-all.component.scss']
})
export class JobAllComponent implements OnInit{
  constructor(public dialog:MatDialog,
              private jobService:JobService,
              private toastrService:ToastrService,) {
  }
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  status:string="ACTIVE"

  dataSource = new MatTableDataSource();
  displayedColumns = ['code','creationType','dueDate', 'type', 'progress', 'qty', 'action'];
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  ngOnInit(): void {
    this.getAllJobs()
  }
  openModal(){
    this.dialog.open(JobDoorComponent,{
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
      this.getAllJobs()
    });
  }
  getAllJobs(){
    this.jobService.getJobListByStatusAndProgress(
      this.status,
      "ALL",
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("job-all",data.data)
      this.dataSource.data = data.data['content']
      this.totalPage = data.data.totalElements
    })
  }
  onRowClick(row: any){
    console.log("test click",row)
    this.dialog.open(JobEditViewComponent,{
      data: {
        data:row
      }
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
      this.getAllJobs()
    });
  }

  test() {
    console.log("test")
  }
  delete(element:any) {
    console.log("delete",element)
    this.dialog.open(ApprovalDialogComponent,{
      width:"350px",
      data: new ApprovalDialogConfig('Confirm','Cancel Job','Do you Want to Cancel this Job?')
    }).afterClosed()?.pipe().subscribe(res=>{
      if (res){
        this.jobService.deleteJobDoor(
          element).pipe().subscribe(data=>{
          console.log("job-all",data.data)
          if (data.code==200){
            this.getAllJobs()
            this.toastrService.success("Success")
          }else {
            this.toastrService.error("UnSuccess")
          }
        },error => {
          this.toastrService.error(error.error.message,"Error")
        })

      }

    })

  }

  onPageChange(event: any) {
    console.log("event",event)
    this.selectedPageIndex = event.pageIndex;
    this.selectedPageSize = event.pageSize;
    this.getAllJobs()
  }

  onSlideToggleChange(event: any) {
    console.log("ssssssff",event.checked)
    if (event.checked){
      this.status = "ACTIVE"
      this.disabled=false
    }
    else {
      this.status = "INACTIVE"
      this.disabled=true
    }
    this.getAllJobs()
  }

}
