import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {DesignService} from "../../../../core/services/api/admin/design.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {ProductViewComponent} from "../../../customer/product/inner-component/product-view/product-view.component";
import {
  ProductDesignAddInventoryComponent
} from "./inner-component/product-design-add-inventory/product-design-add-inventory.component";

@Component({
  selector: 'app-product-design-view',
  templateUrl: './product-design-view.component.html',
  styleUrls: ['./product-design-view.component.scss']
})
export class ProductDesignViewComponent implements OnInit{
  designId!: string;
  designForm!:FormGroup;
  dataSource = new MatTableDataSource();
  displayedColumns = ['image', 'code', 'name', 'type', 'status', 'action'];

  testTbale:any=[]
  inventoryList:any=[]

  totalPage=0
  pageSize=[10,20,50]
  selectedPageSize:number=10
  selectedPageIndex:number=0
  constructor(public dialog: MatDialog,
              private toastrService: ToastrService,
              private designService: DesignService,
              private router:Router,
              private inventoryService:InventoryService,
              private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.designId = id !== null ? id : '';

    this.designForm = new FormGroup({
      id:new FormControl(''),
      name:new FormControl('',Validators.required),
      code:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required),
      image:new FormControl(''),
      status:new FormControl('')

    });
    if (this.designId!=''|| this.designId!=null){
      console.log("ssss",this.designId)
      this.getDesignById()
      this.getInventoryByDesign(this.designId)
    }
  }

  getDesignById(){
    this.designService.getDesignById(this.designId).pipe().subscribe(data=>{
      this.designForm.patchValue(data.data)
      console.log("sssdsff", this.designForm.value)
    })
  }


  onRowClick(row: any) {
  }
  cancel() {
    this.router.navigate(['admin/product-design/all']);
  }

  selectType(event: Event) {
    const selectElement = event.target as HTMLSelectElement;

    console.log("event select",selectElement.value)
    this.inventoryService.getInventoryByType(
      selectElement.value,
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("bar-all",data.data)
      this.testTbale = data.data['content']
      this.totalPage = data.data.totalElements
    })
  }
  getInventoryByDesign(designId:string){
    this.designService.getInventoryByDesign(designId).pipe().subscribe(data=>{
      console.log("Response getInventoryByDesign",data)
      this.inventoryList = data.data

    })
  }

  addInventory(data: any) {
    console.log("inventory item",this.designId)
    this.dialog.open(ProductDesignAddInventoryComponent,{
      data: {
        designId:this.designId,
        data:data
      }
    })
    this.dialog.afterAllClosed.pipe().subscribe(result => {
      console.log('The dialog was closed',result);
      this.getInventoryByDesign(this.designId);
    });

  }

  changeStatus(status:string) {
    console.log("design Id",this.designId)
    console.log("design Status",status)
    this.designService.changeStatus(this.designId,status).pipe().subscribe(data=>{
      console.log("response",data)
      if (data.code==200){
        this.getDesignById()
        this.toastrService.success("Change Status")
      }else {
        this.toastrService.error("UnSuccess..!")
      }

    },error => {
      this.toastrService.error("UnSuccess..!")
    })
  }

  delete(id:string) {
    this.designService.delete(id).pipe().subscribe(data=>{
      console.log("response",data)
      if (data.code==200){
        this.getInventoryByDesign(this.designId);
        this.toastrService.success("Close")
      }else {
        this.toastrService.error("UnSuccess..!")
      }

    })
  }

  save() {
    console.log("ssss",this.designForm.value)
    this.designService.updateDesign(this.designForm.value).pipe().subscribe(data=>{
      console.log("response",data)
      if (data.code==200){
        this.getInventoryByDesign(this.designId);
        this.toastrService.success("Saved..!")
      }
      else {
        this.toastrService.error("UnSuccess..!")
      }

    },error => {
      this.toastrService.error("UnSuccess..!")
    })
  }
}
