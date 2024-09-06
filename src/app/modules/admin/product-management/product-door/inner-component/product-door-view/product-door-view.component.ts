import {Component, OnInit} from '@angular/core';
import {DoorService} from "../../../../../../core/services/api/door.service";
import {StockItemService} from "../../../../../../core/services/api/admin/stock-item.service";
import {JobService} from "../../../../../../core/services/api/admin/job.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-door-view',
  templateUrl: './product-door-view.component.html',
  styleUrls: ['./product-door-view.component.scss']
})
export class ProductDoorViewComponent implements OnInit{
  constructor(private doorService:DoorService,
              private stockService:StockItemService,
              private route: ActivatedRoute,
              public dialog:MatDialog,
              private toastrService:ToastrService,
              private router:Router) {
  }

  productId!: string;
  productDoor:any;


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')!;
      console.log("Product ID:", this.productId);
    });
    this.getDoorById()
  }

  getDoorById(){
    this.doorService.getDoorById(this.productId).pipe().subscribe(data=>{
      if (data.code==200){
        this.productDoor =data.data
        console.log("door product",this.productDoor.image )
      }
    })
  }

}
