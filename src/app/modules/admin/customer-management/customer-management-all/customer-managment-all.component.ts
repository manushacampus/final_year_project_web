import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../../../../core/services/api/admin/employee.service";
import {ToastrService} from "ngx-toastr";
import {AdminCustomerService} from "../../../../core/services/api/admin/admin-customer.service";

@Component({
  selector: 'app-customer-management-all',
  templateUrl: './customer-management-all.component.html',
  styleUrls: ['./customer-management-all.component.scss']
})
export class CustomerManagmentAllComponent implements OnInit{
  employeeList:any[]=[]
  constructor(private router: Router,
              private employeeService:EmployeeService,
              private adminCustomerService:AdminCustomerService,
              private toastrService:ToastrService) {
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.adminCustomerService.getCustomerAll(0,10).pipe().subscribe((data:any)=>{
      console.log("data",data)
      this.employeeList = data.data['content']
    })
  }

  viewCustomer() {
    this.router.navigate(['admin/customer/view', "id"]);
  }
}
