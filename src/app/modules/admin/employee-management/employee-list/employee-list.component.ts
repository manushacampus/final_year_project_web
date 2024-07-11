import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../../../../core/services/api/admin/employee.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  employeeList:any[]=[]
  constructor(private router: Router,
              private employeeService:EmployeeService,
              private toastrService:ToastrService) {
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.employeeService.getEmployeeList(0,10).pipe().subscribe((data:any)=>{
      console.log("data",data)
      this.employeeList = data.data['content']
    })
  }
}
