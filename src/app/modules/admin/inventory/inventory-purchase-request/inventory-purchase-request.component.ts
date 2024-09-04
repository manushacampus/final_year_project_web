import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BarSectionService} from "../../../../core/services/api/admin/bar-section.service";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {ToastrService} from "ngx-toastr";
import {map, Observable, of} from "rxjs";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {SupplierService} from "../../../../core/services/api/admin/supplier.service";

@Component({
  selector: 'app-inventory-purchase-request',
  templateUrl: './inventory-purchase-request.component.html',
  styleUrls: ['./inventory-purchase-request.component.scss']
})
export class InventoryPurchaseRequestComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<InventoryPurchaseRequestComponent>,
              private barSectionService:BarSectionService,
              private supplierService:SupplierService,
              private inventoryService:InventoryService,
              private dialog:MatDialog,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any
  ) {
  }
  options:(string | null)[] = [];
  filteredOptions!: Observable<string[]>;
  ngOnInit(): void {
    console.log("data",this.data.data.id)
    this.barInventoryForm = new FormGroup({
      supplier: new FormControl('',this.optionValidator.bind(this)),
      qty: new FormControl('',),
    });

    this.getAllBarAngels();

    this.filteredOptions = (this.barInventoryForm.get("sectionNo")?.valueChanges|| of([])).pipe(
      map(value => this._filter(value))
    );


  }
  private _filter(value: string): string[] {
    console.log("value=",value)
    const filterValue = value.toLowerCase();
    return this.options
      .filter((option): option is string => option !== null)
      .filter(option => option.toLowerCase().includes(filterValue));
  }
  getAllBarAngels(){
    this.supplierService.getAllSupplierByStatus("ACTIVE",0,100).pipe().subscribe(data=>{
      console.log(data.data['content'])
      this.options = data.data['content'].map((item:any) => item.first_name);
      console.log(this.options);
    });
  }
  private optionValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value && !this.options.includes(control.value)) {
      return { invalidOption: true };
    }
    return null;
  }
  getErrorMessage() {
    const control = this.barInventoryForm.get('sectionNo');
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    if (control?.hasError('invalidOption')) {
      return 'Invalid section number';
    }
    return '';
  }

  barInventoryForm!:FormGroup;

  saveJobDoor() {
    console.log("save object=",this.barInventoryForm.value)
    this.inventoryService.addBar(this.barInventoryForm.value).pipe().subscribe(data=>{
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


  ss() {
    console.log("sssss")

  }
}
