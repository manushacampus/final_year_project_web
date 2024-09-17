import {Component, Inject, OnInit} from '@angular/core';
import {auto} from "@popperjs/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {CProductService} from "../../../../../core/services/api/customer/c-product.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit{
  selectedImage: any;
  constructor(public dialogRef:MatDialogRef<ProductViewComponent>,
              private productService:CProductService,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }
  qtyControl = new FormControl(0,Validators.required);
  product:any;
  orderList: any[] = [];

  ngOnInit(): void {
    console.log("product",this.data.data)
    }
  name = 'Angular';


  protected readonly auto = auto;

  addToCart(stockId:any) {
    console.log("stock ",stockId)
    console.log("qty",this.qtyControl.value)
    if (this.qtyControl.value != null && this.qtyControl.value >= 1 && this.qtyControl.valid){
    this.productService.addToCart(stockId,this.qtyControl.value ?? 0).pipe().subscribe(data=>{
      console.log("response",data)
      if (data.code==200){
        this.toastrService.success("Add to Cart Success...")
        this.dialogRef.close()
      }else {
        this.toastrService.error("UnSuccess")
      }

    },error => {
      this.toastrService.error("UnSuccess")
    })
    }else {
      this.toastrService.error("Invalid Input...")
    }
  }

  order(data:any) {
    console.log("stock ",data.id)
    console.log("qty",this.qtyControl.value)
    if (this.qtyControl.value != null && this.qtyControl.value >= 1 && this.qtyControl.valid){
      this.orderList = []
      this.orderList.push(data)
      this.productService.orderProduct(data.id,this.qtyControl.value ?? 0).pipe().subscribe(data=>{
        console.log("response",data)
        if (data.code==200){
          this.toastrService.success("Place the Order Success")
          this.dialogRef.close()
        }else {
          this.toastrService.error("UnSuccess")
        }
      },error => {
        this.toastrService.error("UnSuccess")
      })
    }else {
      this.toastrService.error("UnSuccess")
    }

  }
}
