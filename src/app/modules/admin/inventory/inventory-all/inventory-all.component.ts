import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inventory-all',
  templateUrl: './inventory-all.component.html',
  styleUrls: ['./inventory-all.component.scss']
})
export class InventoryAllComponent implements OnInit{
  ngOnInit(): void {
    this.getInventoryAll()
  }
  inventoryList:any[]=[]
  getInventoryAll(){
    fetch('./assets/api/inventory.json').then(res=>res.json()).then(
      json =>{
        console.log("response=",json)
        this.inventoryList =json
      }
    )
  }
}
