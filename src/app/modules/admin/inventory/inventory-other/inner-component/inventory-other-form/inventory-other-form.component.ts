import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BarSectionService} from "../../../../../../core/services/api/admin/bar-section.service";
import {InventoryService} from "../../../../../../core/services/api/admin/inventory.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-inventory-other-form',
  templateUrl: './inventory-other-form.component.html',
  styleUrls: ['./inventory-other-form.component.scss']
})
export class InventoryOtherFormComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<InventoryOtherFormComponent>,
              private barSectionService:BarSectionService,
              private inventoryService:InventoryService,
              private dialog:MatDialog,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any
  ) {
  }
  otherInventoryForm!:FormGroup;
  options:(string | null)[] = [];
  ngOnInit(): void {

    this.otherInventoryForm = new FormGroup({
      id:new FormControl(''),
      name:new FormControl(''),
      code:new FormControl(''),
      type: new FormControl('',),
      status: new FormControl('',),
      qty: new FormControl('',),
      inventoryType: new FormControl('',),
      price: new FormControl('',),
    });

    this.getAllBarAngels();

  }
  getAllBarAngels(){
    this.barSectionService.getBarSectionAll().pipe().subscribe(data=>{
      console.log(data.data)
      this.options = data.data.map((item:any) => item.sectionNo);
      console.log(this.options);
    });
  }


  saveJobBoard() {
    console.log("save object=",this.otherInventoryForm.value)
    this.inventoryService.addOther(this.otherInventoryForm.value).pipe().subscribe(data=>{
      console.log("response",data)
      if (data.code==200){
        this.toastrService.success("saved!!")
      }
      else {
        this.toastrService.error("Error")
      }
    },error => {
      this.toastrService.error("Error",error)
    })
  }

}
