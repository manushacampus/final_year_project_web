import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {DesignService} from "../../../../core/services/api/admin/design.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";

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
    this.designService.addInventory(this.designId,data.id).pipe().subscribe(data=>{
      console.log("Response",data)
      this.getInventoryByDesign(this.designId);
    })
  }
}
