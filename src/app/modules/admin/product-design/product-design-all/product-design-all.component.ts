import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {MatTableDataSource} from "@angular/material/table";
import {ProductDesignFormComponent} from "../product-design-form/product-design-form.component";

@Component({
  selector: 'app-product-design-all',
  templateUrl: './product-design-all.component.html',
  styleUrls: ['./product-design-all.component.scss']
})
export class ProductDesignAllComponent implements OnInit {
  inventoryList: any[] = []

  constructor(public dialog: MatDialog,
              private toastrService: ToastrService,
              private inventoryService: InventoryService) {
  }

  dataSource = new MatTableDataSource();
  displayedColumns = ['image', 'code', 'color', 'type', 'qty', 'action'];
  totalPage = 0
  pageSize = [10, 20, 50]
  selectedPageSize: number = 10
  selectedPageIndex: number = 0

  ngOnInit(): void {
  }
  onPageChange(event: any) {
    console.log("event",event)
    this.selectedPageIndex = event.pageIndex;
    this.selectedPageSize = event.pageSize;
    // this.getAllBar()
  }
  onRowClick(row: any) {

  }

  addNewDesign() {
    this.dialog.open(ProductDesignFormComponent,{
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }
}
