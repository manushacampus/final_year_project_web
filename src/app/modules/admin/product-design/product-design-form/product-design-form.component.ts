import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-design-form',
  templateUrl: './product-design-form.component.html',
  styleUrls: ['./product-design-form.component.scss']
})
export class ProductDesignFormComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<ProductDesignFormComponent>,
              private jobService:JobService,
              private toastrService:ToastrService) {
  }
  selectedTabIndex = 0;
  doorForm!:FormGroup;
  jobForm!:FormGroup;
  ngOnInit(): void {
    this.jobForm = new FormGroup({
      id:new FormControl(''),
      dueDate:new FormControl('',Validators.required),
      qty:new FormControl(1,Validators.required),
      description:new FormControl('')

    });

    this.doorForm = new FormGroup({
      id:new FormControl(''),
      name: new FormControl(''),
      code: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required),
      height: new FormControl('',Validators.required),
      width: new FormControl('',Validators.required),
      doorColor:new FormControl('',Validators.required),
      fillingType:new FormControl('',Validators.required),
      glassThickness: new FormControl(0),
      boardThickness: new FormControl(0),
      glassColor:new FormControl(''),
      boardColor:new FormControl(''),
      typeOfBoard:new FormControl(''),
    });
  }

  saveJobDoor(){
    if (this.jobForm.valid && this.doorForm.valid){
      this.jobService.createDoor(this.jobForm,this.doorForm).pipe().subscribe(data=>{
        if (data.code==200){
          this.toastrService.success("success")
          this.modalRef.close()
        }
        else {
          this.toastrService.error("unSuccess")
        }
      },error => {
        this.toastrService.error(error.error.message,"Error")
      })
    }
    else {
      this.toastrService.error("Please Fill The Required Field ","Error")
    }
  }

  datePicker() {
    console.log("date:",this.doorForm.value.dueDate)
    // let format = 'dd/MM/YYYY';
    // let datePipe = new DatePipe('en-US');
    // let formatDate= datePipe.transform(new Date(this.doorForm.value.dueDate), format) + "";
    // this.doorForm.get('dueDate')?.setValue(formatDate)
    console.log("format date:",this.doorForm.value.dueDate)
  }
  goToNextTab() {
    if (this.selectedTabIndex < 1) { // Assuming there are 3 tabs
      this.selectedTabIndex++;
    }
  }
  goToPreviousTab() {
    if (this.selectedTabIndex > 0) {
      this.selectedTabIndex--;
    }
  }
}
