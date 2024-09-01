import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";

@Component({
  selector: 'app-inventory-all',
  templateUrl: './inventory-all.component.html',
  styleUrls: ['./inventory-all.component.scss']
})
export class InventoryAllComponent implements OnInit{
  constructor(public dialog:MatDialog,
              private toastrService:ToastrService,
              private inventoryService:InventoryService) {
  }
  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  ngOnInit(): void {
    this.getAll()
  }
  inventoryList:any[]=[]
  // getInventoryAll(){
  //   fetch('./assets/api/inventory.json').then(res=>res.json()).then(
  //     json =>{
  //       console.log("response=",json)
  //       this.inventoryList =json
  //     }
  //   )
  // }
  getAll(){
    this.inventoryService.getInventoryByType(
      "ALL",
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("bar-all",data.data)
      this.inventoryList = data.data['content']
      this.totalPage = data.data.totalElements
    })
  }
}
