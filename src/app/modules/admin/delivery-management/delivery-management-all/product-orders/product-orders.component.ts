import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {SupplierService} from "../../../../../core/services/api/admin/supplier.service";
import {MatTableDataSource} from "@angular/material/table";
import {
  SupplierManagementFormComponent
} from "../../../supplier-management/supplier-management-form/supplier-management-form.component";

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrls: ['./product-orders.component.scss']
})
export class ProductOrdersComponent implements OnInit{

  inventoryList:any[]=[]
  constructor(public dialog:MatDialog,
              private toastrService:ToastrService,
              private supplierService:SupplierService) {
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ['name','address', 'order-status', 'status' ,'action'];
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  ngOnInit(): void {
    this.getAllSupplier()
  }
  addNewSupplier() {
    this.dialog.open(SupplierManagementFormComponent,{
    }).afterClosed().subscribe(result=>{
    });
  }
  onPageChange(event: any) {
    console.log("event",event)
    this.selectedPageIndex = event.pageIndex;
    this.selectedPageSize = event.pageSize;
    this.getAllSupplier()
  }
  getAllSupplier(){
    this.supplierService.getAllSupplierByStatus(
      "ACTIVE",
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("Supplier-all",data.data)
      this.dataSource.data = data.data['content']
      this.totalPage = data.data.totalElements
    })
  }

  onRowClick(row: any) {

  }

}
