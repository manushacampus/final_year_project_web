import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { JobService } from "../../../../core/services/api/admin/job.service";
import { EmployeeJobViewComponent } from "../employee-job-view/employee-job-view.component";
import { DatePipe } from "@angular/common";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-employee-task-all',
  templateUrl: './employee-task-all.component.html',
  styleUrls: ['./employee-task-all.component.scss']
})
export class EmployeeTaskAllComponent implements OnInit {
  jobList: any[] = [];
  currentStatus: string = '';
  constructor(public dialog: MatDialog,
              private jobService: JobService,
              private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getAllJobs("PENDING");
  }

  getAllJobs(type:string) {
    this.jobService.getJobListByStatusAndEmployee("ACTIVE", type).subscribe((data: any) => {
      console.log("Job List Data:", data.data);
      this.jobList = data.data;
    });
  }

  public getDate(dateR: any): string {
    if (!dateR) return " ";
    const date = new Date(dateR);
    return this.datePipe.transform(date, 'yyyy-MM-dd') || "";
  }

  getStockItemById(job: any) {
    this.dialog.open(EmployeeJobViewComponent, {
      data: {
        data: job,
        type: "TASK",
        job: job
      }
    }).afterClosed().subscribe(() => {
      this.getAllJobs(this.currentStatus); // Refresh the job list after closing the dialog
    });
  }

  getClassObject(type: any): any {
    return {
      'badge-warning': type.progress === "PROCESSING",
      'badge-danger': type.progress === "PENDING",
      'badge-success': type.progress === "DONE"
    };
  }
  onTabChange(event: MatTabChangeEvent) {
    const selectedTabIndex = event.index;
    switch (selectedTabIndex) {
      case 0:
        this.currentStatus='PENDING'
        this.getAllJobs('PENDING');
        break;
      case 1:
        this.currentStatus='PROCESSING'
        this.getAllJobs('PROCESSING');
        break;
      case 2:
        this.currentStatus='DONE'
        this.getAllJobs('DONE');
        break;
      default:
        break;
    }
  }

}
