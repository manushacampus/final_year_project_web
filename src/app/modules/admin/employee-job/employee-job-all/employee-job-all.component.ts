import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";
import {EmployeeJobViewComponent} from "../employee-job-view/employee-job-view.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-employee-job-all',
  templateUrl: './employee-job-all.component.html',
  styleUrls: ['./employee-job-all.component.scss']
})
export class EmployeeJobAllComponent implements OnInit{
  constructor(public dialog:MatDialog,
              private toastrService:ToastrService,
              private jobService:JobService,
              private datePipe: DatePipe) {
  }
  jobList:any[]=[]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  ngOnInit(): void {
    this.getAllJobs()
  }
  getAllJobs(){
    this.jobService.getJobListByStatusAndProgress(
      "ACTIVE",
      "NEW",
      this.selectedPageIndex,
      this.selectedPageSize
    ).pipe().subscribe(data=>{
      console.log("job=",data.data)
      this.jobList = data.data['content']
    })
  }
  getJobById(id:string){
    this.jobService.getJobById(id).pipe().subscribe(data=>{
      console.log("data job",data.data)
      this.dialog.open(EmployeeJobViewComponent,{
        data: {
          data:data.data,
          type:"JOB"}
      }).afterClosed().subscribe(result=>{
        this.getAllJobs()
      });
    })
  }
  public getDate(dateR:any){
    const date = new Date(dateR);
    const dateString = this.datePipe.transform(date, 'yyyy-MM-dd');
    return dateString;
  }
  getItem(item:any){
    console.log("hshshshssh",item)
      this.dialog.open(EmployeeJobViewComponent,{
        data: {
          data:item,
          type:"JOB",
          job:item}
      }).afterClosed().subscribe(result=>{
        this.getAllJobs()
      });

  }
}
