import {Component, OnInit} from '@angular/core';
import {DoorService} from "../../../../../core/services/api/door.service";
import {CProductService} from "../../../../../core/services/api/customer/c-product.service";
import {JobService} from "../../../../../core/services/api/admin/job.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cart-all',
  templateUrl: './cart-all.component.html',
  styleUrls: ['./cart-all.component.scss']
})
export class CartAllComponent implements OnInit{
  constructor(private doorService:DoorService,
              private cProductService:CProductService,
              private toastrService:ToastrService,) {
  }
  cartItem:any;
  ngOnInit(): void {
    this.getAllCart()
  }
  getAllCart(){
    this.cProductService.allCart().pipe().subscribe(data=>{

      if (data.code==200){
        console.log("ssjsjsj",data.data)
        this.cartItem = data.data;
      }
    })
  }
}
