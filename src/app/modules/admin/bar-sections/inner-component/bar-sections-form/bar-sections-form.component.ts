import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../../../../../core/services/api/admin/employee.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BarSectionService} from "../../../../../core/services/api/admin/bar-section.service";
import {InventoryService} from "../../../../../core/services/api/admin/inventory.service";

@Component({
  selector: 'app-bar-sections-form',
  templateUrl: './bar-sections-form.component.html',
  styleUrls: ['./bar-sections-form.component.scss']
})
export class BarSectionsFormComponent implements OnInit{
  constructor(private router: Router,
              private barSectionService:BarSectionService,
              private toastrService:ToastrService) {
  }
  image: File | null = null
  sectionForm!:FormGroup;
  category:any[]=[];
  ngOnInit(): void {
    this.getSectionsCategory()
    this.sectionForm = new FormGroup({
      id: new FormControl(''),
      sectionNo: new FormControl('',Validators.required),
      name: new FormControl(''),
      code: new FormControl('',Validators.required),
      thickness: new FormControl(''),
      weight: new FormControl(''),
      category: new FormControl('',Validators.required),
      size: new FormControl('',Validators.required),
      image: new FormControl('')
    });
  }

  addBarAngles(){
    if (this.sectionForm.valid){
    this.barSectionService.addSeection(this.sectionForm.value,this.image).pipe().subscribe((data:any)=>{
      console.log("sss",data)
      if (data.code==200){
        // this.router.navigateByUrl('admin/employee/all')
        this.sectionForm.reset();
        this.image=null;
        this.toastrService.success("success")
      }
      else {
        this.toastrService.error("Server Error","UnSuccess")
      }

    },error => {
      this.toastrService.error(error.error.message,"Error")
    })
    }else {
      this.toastrService.error("Invalid Form","UnSuccess")
    }
  }
  onFileSelected(event: any) {
    console.log("ss image",event.target.files[0])
    this.image = event.target.files[0];
  }
  getSectionsCategory(){
    fetch('./assets/api/section-category.json').then(res=>res.json()).then(
      json =>{
        console.log("response=",json)
        this.category =json
      }
    )
  }


}
