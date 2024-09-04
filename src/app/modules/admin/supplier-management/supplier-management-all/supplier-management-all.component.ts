import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {MatTableDataSource} from "@angular/material/table";
import {
  InventoryOtherFormComponent
} from "../../inventory/inventory-other/inner-component/inventory-other-form/inventory-other-form.component";
import {SupplierManagementFormComponent} from "../supplier-management-form/supplier-management-form.component";
import {SupplierService} from "../../../../core/services/api/admin/supplier.service";

@Component({
  selector: 'app-supplier-management-all',
  templateUrl: './supplier-management-all.component.html',
  styleUrls: ['./supplier-management-all.component.scss']
})
export class SupplierManagementAllComponent implements OnInit{
  inventoryList:any[]=[]
  constructor(public dialog:MatDialog,
              private toastrService:ToastrService,
              private supplierService:SupplierService) {
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ['name','nic', 'email', 'type', 'contact','action'];
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

