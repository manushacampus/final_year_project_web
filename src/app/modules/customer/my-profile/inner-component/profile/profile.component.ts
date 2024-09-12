import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {CustomerService} from "../../../../../core/services/api/customer/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  profileImage: string = 'http://bootdey.com/img/Content/avatar/avatar1.png';
  constructor(
    private customerService:CustomerService,
    private toastrService:ToastrService,) {
  }
  user!:FormGroup;
  ngOnInit(): void {
    this.user = new FormGroup({
      id:new FormControl(''),
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',),
      gender:new FormControl('',Validators.required),
      nic:new FormControl('',Validators.required),
      dob:new FormControl('',Validators.required),
      registeredDate:new FormControl('',),
      image:new FormControl('http://bootdey.com/img/Content/avatar/avatar1.png',),
      userRole:new FormControl('',),
      contact:new FormControl('',),
      designation:new FormControl('',),

    });

    this.getMyProfile()
  }
  getMyProfile(){
    this.customerService.getMyProfile().pipe().subscribe(data=>{
      if (data.code=200){
        this.user.patchValue(data.data.user)

        console.log("mys profile",this.user.value)
      }
    })
  }
  updateProfile(){
    this.customerService.updateMyProfile(this.user.value).pipe().subscribe(data=>{
      console.log("response",data)
      if (data.code==200){
        this.toastrService.success("Success")
      }
    })
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.customerService.updateProfileImage(file).pipe().subscribe(data=>{
        console.log("response",data)
        if (data.code==200){
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.user.get('image')?.setValue(e.target.result);  // Set the image preview
          };
          reader.readAsDataURL(file);
          this.toastrService.success("Success")
        }

      })


    }
  }

}
