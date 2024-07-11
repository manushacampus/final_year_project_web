import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {ProductViewComponent} from "../product-view/product-view.component";
import {DoorService} from "../../../../../core/services/api/door.service";
import {StockItemService} from "../../../../../core/services/api/admin/stock-item.service";
import {JobService} from "../../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  totalPage=20
  pageSize=[10,20,50]
  data:any=[{id:"01"},{id:"01"}, {id:"01"}, {id:"01"}, {id:"01"}, {id:"01"},{id:"01"},{id:"01"},{id:"01"},{id:"01"},]
  constructor(private doorService:DoorService,
              private stockService:StockItemService,
              private jobService:JobService,
              public dialog:MatDialog,
              private toastrService:ToastrService,) {
  }
  productDoorList:any[]=[]
  ngOnInit(): void {
    this.getAllDoorList()
  }
  onPageChange($event: PageEvent) {

  }
  getAllDoorList(){
    this.stockService.getStockItemList(0,10,'ACTIVE','DOOR').pipe().subscribe(data=>{
      if (data.code==200){
        this.productDoorList =data.data['content']
        console.log("door lits pageble",data.data['content'] )
      }
    })
  }
  openModal(){
      this.dialog.open(ProductViewComponent,{
      })
  }


}
