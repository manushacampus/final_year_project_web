import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {ProductViewComponent} from "../product-view/product-view.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  totalPage=20
  pageSize=[10,20,50]
  data:any=[{id:"01"},{id:"01"}, {id:"01"}, {id:"01"}, {id:"01"}, {id:"01"},{id:"01"},{id:"01"},{id:"01"},{id:"01"},]
constructor(public dialog:MatDialog) {
}
  ngOnInit(): void {
  }
  onPageChange($event: PageEvent) {

  }
  openModal(){
      this.dialog.open(ProductViewComponent,{
      })
  }


}
