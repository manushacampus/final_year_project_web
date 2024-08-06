import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CDesignService} from "../../../../../core/services/api/customer/c-design.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DesignDto} from "../../../../../core/dto/design-dto";

@Component({
  selector: 'app-quot-product',
  templateUrl: './quot-product.component.html',
  styleUrls: ['./quot-product.component.scss']
})
export class QuotProductComponent implements OnInit{
  designId!: string;
  detailsForm!:FormGroup;
  constructor(private router:Router,
              private designService: CDesignService,
              private route: ActivatedRoute) {
  }
  designObj:any
  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      id:new FormControl(''),
      height:new FormControl('',Validators.required),
      width:new FormControl('',Validators.required),
      color:new FormControl('',Validators.required),
      design:new FormControl(new DesignDto()),

    });

    const id = this.route.snapshot.paramMap.get('id');
    this.designId = id !== null ? id : '';
    if (this.designId!=''|| this.designId!=null){
      console.log("ssss",this.designId)
      this.getDesignById()
    }
  }
  cancel() {
    this.router.navigate(['customer/quotation'])
  }
  getDesignById(){
    this.designService.getDesignById(this.designId).pipe().subscribe(data=>{
      console.log("desig",data.data)
      this.designObj=data.data;
    })
  }
}
