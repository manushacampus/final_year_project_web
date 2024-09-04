import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {EmployeeJobViewComponent} from "../employee-job-view/employee-job-view.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-employee-task-all',
  templateUrl: './employee-task-all.component.html',
  styleUrls: ['./employee-task-all.component.scss']
})
export class EmployeeTaskAllComponent implements OnInit {
  constructor(public dialog: MatDialog,
              private jobService: JobService,
              private datePipe: DatePipe) {
  }
  jobList: any[] = []

  ngOnInit(): void {
    this.getAllJobs()
  }

  getAllJobs() {
    this.jobService.getJobListByStatusAndEmployee("ACTIVE", "PROCESSING").pipe().subscribe((data:any)=> {
      console.log("lll",data.data)
      this.jobList = data.data
    })
  }
  public getDate(dateR:any){
    if (dateR=='' ||dateR==null){
      return " ";
    }
    const date = new Date(dateR);
    const dateString = this.datePipe.transform(date, 'yyyy-MM-dd');
    return dateString;
  }
  getStockItemById(job:any) {
      this.dialog.open(EmployeeJobViewComponent, {
        data: {
          data: job,
          type:"TASK",
          job:job
        }
      }).afterClosed().subscribe(result => {
        this.getAllJobs()
      });

  }
  getClassObject(type:any) {
    console.log("tttype",type)
    return {
      'green': type.progress==="PROCESSING",
      'blue': type.progress==="PENDING",
      'red':type.progress==="DONE"
      // More conditions and classes can be added dynamically here
    };
  }
}
