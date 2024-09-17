import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DesignService} from "../../../../../core/services/api/admin/design.service";
import {CDesignService} from "../../../../../core/services/api/customer/c-design.service";

@Component({
  selector: 'app-product-design',
  templateUrl: './product-design.component.html',
  styleUrls: ['./product-design.component.scss']
})
export class ProductDesignComponent implements OnInit{
  totalPage = 0
  pageSize = [10, 20, 50]
  selectedPageSize: number = 10
  selectedPageIndex: number = 0
constructor(private router:Router,
            private designService: CDesignService) {
}

  productDesign:any[]=[]

  ngOnInit(): void {
    this.getAllDesignPage("")
  }
  navigatePage(id:any) {
    console.log("ss")
    this.router.navigate([`customer/quotation/design/${id}`])
  }
  getAllDesignPage(type:string){
    this.designService.getDesignByStatusPage(
      type,
      "ACTIVE",
      this.selectedPageIndex,
      this.selectedPageSize).pipe().subscribe(data=>{
      console.log("design",data.data)
      this.productDesign = data.data['content']
      this.totalPage = data.data.totalElements
    })
  }

  filter(value:string) {
    this.getAllDesignPage(value)

  }
}
