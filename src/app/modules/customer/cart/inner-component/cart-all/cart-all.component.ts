import {Component, OnInit} from '@angular/core';
import {DoorService} from "../../../../../core/services/api/door.service";
import {CProductService} from "../../../../../core/services/api/customer/c-product.service";
import { debounceTime } from 'rxjs/operators';
import {ToastrService} from "ngx-toastr";
import {CCartService} from "../../../../../core/services/api/customer/c-cart.service";

@Component({
  selector: 'app-cart-all',
  templateUrl: './cart-all.component.html',
  styleUrls: ['./cart-all.component.scss']
})
export class CartAllComponent implements OnInit{
  constructor(private doorService:DoorService,
              private cProductService:CProductService,
              private cartService:CCartService,
              private toastrService:ToastrService,) {
  }
  cartItem:any;
  total!:number;
  ngOnInit(): void {
    this.getAllCart()
  }
  getAllCart(){
    this.cProductService.allCart().pipe().subscribe(data=>{

      if (data.code==200){
        console.log("ssjsjsj",data.data)
        this.cartItem = data.data;
        this.total = this.calculateTotal()
      }
    })
  }
  calculateTotal(): number {
    return this.cartItem.reduce((acc:number, item:any) => acc + (item.stockItem.price * item.qty), 0);
  }

  changeQty(cart: any, event: any) {
    const newQty = event.target.value;
    console.log("qty",newQty)
    console.log("cartID",cart.id)
    if(newQty!=null || newQty!=''){
      this.cartService.changeQty(cart.id,newQty).pipe( debounceTime(5000)).subscribe(data=>{
        if (data.code==200){
          console.log("response",data.data)
          this.total = this.calculateTotal()
          this.toastrService.success("Success")
        }
        else {
          this.toastrService.error("UnSuccess")
        }
      },error => {
        this.toastrService.error("UnSuccesst")
      })
    }

  }

  orderCart() {
    this.cProductService.orderProductCart(this.cartItem).pipe().subscribe(data=>{
      if (data.code==200){
        console.log("ssjsjsj",data.data)

      }
    })
  }
}
