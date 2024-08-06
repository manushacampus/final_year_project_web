import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {MatTableDataSource} from "@angular/material/table";
import {ProductDesignFormComponent} from "../product-design-form/product-design-form.component";
import {DesignService} from "../../../../core/services/api/admin/design.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-design-all',
  templateUrl: './product-design-all.component.html',
  styleUrls: ['./product-design-all.component.scss']
})
export class ProductDesignAllComponent implements OnInit {
  designList: any[] = []

  constructor(public dialog: MatDialog,
              private toastrService: ToastrService,
              private designService: DesignService,
              private router:Router) {
  }

  dataSource = new MatTableDataSource();
  displayedColumns = ['image', 'code', 'name', 'type', 'status', 'action'];
  totalPage = 0
  pageSize = [10, 20, 50]
  selectedPageSize: number = 10
  selectedPageIndex: number = 0

  ngOnInit(): void {
    this.getAllDesignPage();
  }

  getAllDesignPage(){
    this.designService.getDesignByStatusPage(
      "",
      "",
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("design",data.data)
      this.dataSource.data = data.data['content']
      this.totalPage = data.data.totalElements
    })
  }

  onPageChange(event: any) {
    console.log("event",event)
    this.selectedPageIndex = event.pageIndex;
    this.selectedPageSize = event.pageSize;
    this.getAllDesignPage()
  }
  onRowClick(row: any) {

  }

  addNewDesign() {
    this.dialog.open(ProductDesignFormComponent,{
    });
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      this.getAllDesignPage()
    });
  }

  view(id:any) {
    console.log("test work!!")
    this.router.navigate(['admin/product-design/view', id]);
  }
}
