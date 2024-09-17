import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CDesignService} from "../../../../../core/services/api/customer/c-design.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DesignDto} from "../../../../../core/dto/design-dto";
import {CQuotationService} from "../../../../../core/services/api/customer/c-quotation.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-quot-product',
  templateUrl: './quot-product.component.html',
  styleUrls: ['./quot-product.component.scss']
})
export class QuotProductComponent implements OnInit{
  designId!: string;
  detailsForm!:FormGroup;
  total=0.0;
  constructor(private router:Router,
              private designService: CDesignService,
              private quotationService: CQuotationService,
              private route: ActivatedRoute,
              private toastrService:ToastrService) {
  }
  designObj!:DesignDto
  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      id:new FormControl(''),
      height:new FormControl('',Validators.required),
      width:new FormControl('',Validators.required),
      qty:new FormControl('',Validators.required),
      color:new FormControl('',),
      additional:new FormControl('',),
      design:new FormControl(DesignDto),

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
      this.designObj=data.data;
      this.detailsForm.get('design')?.setValue(data.data)
    })
  }

  placeOrder() {
    console.log("design",this.detailsForm.value)
    if (this.detailsForm.valid){
      this.quotationService.placeOrder(this.detailsForm.value).pipe().subscribe(data=>{
        console.log("response",data)
        if (data.code==200){
          this.detailsForm.reset();
          this.toastrService.success("Place Order Success...")
        }
        else {
          this.toastrService.error("UnSuccess")
        }
      },error => {
        this.toastrService.error("UnSuccess")
      })
    }else {
      this.toastrService.error("Invalid Input...")
    }

  }
  cal() {

    console.log("design",this.detailsForm.value)
    if (this.detailsForm.valid){
    this.quotationService.cal(this.detailsForm.value).pipe().subscribe(data=>{
      console.log("response",data)
      if (data.code==200){
        this.total = data.data.price
        this.toastrService.success("Generated Total...")
      }
    })}else {
      this.toastrService.error("Invalid Input...")
    }
  }
}
