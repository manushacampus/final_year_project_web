import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { JobService } from "../../../../core/services/api/admin/job.service";
import { EmployeeJobViewComponent } from "../employee-job-view/employee-job-view.component";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-employee-task-all',
  templateUrl: './employee-task-all.component.html',
  styleUrls: ['./employee-task-all.component.scss']
})
export class EmployeeTaskAllComponent implements OnInit {
  jobList: any[] = [];
  filteredJobList: any[] = [];
  currentStatus: string = 'Processing'; // Default status

  constructor(public dialog: MatDialog,
              private jobService: JobService,
              private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs() {
    this.jobService.getJobListByStatusAndEmployee("ACTIVE", "ALL").subscribe((data: any) => {
      console.log("Job List Data:", data.data);
      this.jobList = data.data;
      this.filterJobsByStatus(this.currentStatus); // Filter jobs based on default status
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
      this.getAllJobs(); // Refresh the job list after closing the dialog
    });
  }

  getClassObject(type: any): any {
    return {
      'badge-warning': type.progress === "PROCESSING",
      'badge-danger': type.progress === "PENDING",
      'badge-success': type.progress === "DONE"
    };
  }

  // Filter jobs based on the selected status
  filterJobsByStatus(status: string) {
    this.currentStatus = status;
    this.filteredJobList = this.jobList.filter(job => job.progress === status);
  }

  // Switch tab handler
  onTabChange(status: string) {
    this.filterJobsByStatus(status);
  }

}
