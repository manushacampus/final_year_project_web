import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {JobService} from "../../../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DesignService} from "../../../../../../core/services/api/admin/design.service";
import {ActivatedRoute, Router} from "@angular/router";
import {InventoryService} from "../../../../../../core/services/api/admin/inventory.service";

@Component({
  selector: 'app-product-design-add-inventory',
  templateUrl: './product-design-add-inventory.component.html',
  styleUrls: ['./product-design-add-inventory.component.scss']
})
export class ProductDesignAddInventoryComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<ProductDesignAddInventoryComponent>,
              private toastrService:ToastrService,
              private designService: DesignService,
              private router:Router,
              private inventoryService:InventoryService,
              private route: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }
  designId!: string;
  detailsForm!:FormGroup;
  ngOnInit(): void {
    console.log("Response modal data ",this.data.data.inventoryType)
    this.detailsForm = new FormGroup({
      id:new FormControl(''),
      qty:new FormControl(0.0,Validators.required),
      type:new FormControl('')

    });}
  add(){
    this.designService.addInventory(this.data.designId,this.data.data.id,this.detailsForm.get('qty')?.value,this.detailsForm.get('type')?.value).pipe().subscribe(data=>{
      if (data.code==200){
        this.toastrService.success("success")
        this.modalRef.close()
      }
    })
  }
}
