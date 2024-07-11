import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {JobService} from "../../../../core/services/api/admin/job.service";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-admin-forget-password',
  templateUrl: './admin-forget-password.component.html',
  styleUrls: ['./admin-forget-password.component.scss']
})
export class AdminForgetPasswordComponent {
  isFirstFormEnable:boolean=false
  isSecondFormEnable:boolean=false
  constructor(public modalRef: MatDialogRef<AdminForgetPasswordComponent>,
              private jobService:JobService,
              private to:ToastrService,
              private _formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data:any,
              private cdr: ChangeDetectorRef) {
  }
  firstFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  sendEmail(stepper: MatStepper) {
    console.log("send mail")
    if (this.firstFormGroup.valid){
      this.isFirstFormEnable=true
      this.cdr.detectChanges()
      stepper.next();
    }


  }
}
