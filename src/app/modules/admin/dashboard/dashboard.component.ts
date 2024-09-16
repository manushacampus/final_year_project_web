import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AuthService} from "../../../auth/auth.service";
import {DashboardService} from "../../../core/services/api/admin/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor(private auth:AuthService,
              private dashboardService:DashboardService) {
  }
  designation!:any;
  dashboard:any={};
  ngOnInit(): void {
    this.designation = this.auth.getLoginUser().designation;
    this.getDashboard()
      this.dashboard = {}
  }

  getDashboard(){
    this.dashboardService.getDashboard().pipe().subscribe(data=>{
        console.log("dashboard",data.data)
        if (data.code==200){
            this.dashboard=data.data
        }
    })
  }

}
