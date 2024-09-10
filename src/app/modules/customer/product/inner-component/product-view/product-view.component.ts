import {Component, Inject, OnInit} from '@angular/core';
import {auto} from "@popperjs/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {CProductService} from "../../../../../core/services/api/customer/c-product.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit{
  selectedImage: any;
  constructor(public dialogRef:MatDialogRef<ProductViewComponent>,
              private productService:CProductService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }
  qtyControl = new FormControl(0);
  product:any;

  ngOnInit(): void {
    console.log("product",this.data.data)
     this.selectedImage = this.imageObject[0];
    }
  name = 'Angular';
  imageObject = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    title: 'Hummingbirds are amazing creatures'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    title: 'Example with title.'
  },{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    title: 'Hummingbirds are amazing creatures'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'Example two with title.'
  }];

  previewImage($event:any) {
    console.log("sssss", this.imageObject[$event].title)
    this.selectedImage = this.imageObject[$event];
  }

  protected readonly auto = auto;

  addToCart(stockId:any) {
    console.log("stock ",stockId)
    console.log("qty",this.qtyControl.value)
    this.productService.addToCart(stockId,this.qtyControl.value ?? 0).pipe().subscribe(data=>{
      console.log("response",data)
    })
  }
}
