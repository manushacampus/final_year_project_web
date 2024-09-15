import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer-payment-view',
  templateUrl: './customer-payment-view.component.html',
  styleUrls: ['./customer-payment-view.component.scss']
})
export class CustomerPaymentViewComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<CustomerPaymentViewComponent>,
              private to:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
  }
  ngOnInit(): void {

  }
}
