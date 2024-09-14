import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {SupplierService} from "../../../../../core/services/api/admin/supplier.service";
import {MatTableDataSource} from "@angular/material/table";
import {
  SupplierManagementFormComponent
} from "../../../supplier-management/supplier-management-form/supplier-management-form.component";
import {OrdersService} from "../../../../../core/services/api/admin/orders.service";
import {Router} from "@angular/router";
import {ThemePalette} from "@angular/material/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrls: ['./product-orders.component.scss']
})
export class ProductOrdersComponent implements OnInit {
  constructor(private toastrService: ToastrService,
              private ordersService: OrdersService,
              private router: Router) {
  }

  orderList: any
  totalPage = 0
  pageSize = [10, 20, 50]
  selectedPageSize: number = 10
  selectedPageIndex: number = 0

  status:string="APPROVED"
  checked = false;
  disabled = false;
  color: ThemePalette = 'accent';

  fontStyleControl = new FormControl('APPROVED');
  fontStyle?: string;


  ngOnInit(): void {
    this.getAll()
    this.fontStyleControl.valueChanges.pipe().subscribe(data=>{
      console.log("value change",data)
      if (data=='APPROVED'){
        this.status = "APPROVED"
        this.disabled=false
      }
      if(data=='DELIVER') {
        this.status = "DELIVER"
        this.disabled=true
      }
      if(data=='DELIVERED') {
        this.status = "DELIVERED"
        this.disabled=true
      }
      if(data=='COMPLETED') {
        this.status = "COMPLETED"
        this.disabled=true
      }
      this.getAll()

    })
  }

  getAll() {
    this.ordersService.getOrdersByStatusAndType('ACTIVE',
      this.status,
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data => {
      console.log("response=", data)
      if (data.code == 200) {
        this.orderList = data.data['content']
      }
    })
  }

  view(id: any) {
    console.log("test work!!")
    this.router.navigate(['admin/delivery/product/view', id]);
  }
}
