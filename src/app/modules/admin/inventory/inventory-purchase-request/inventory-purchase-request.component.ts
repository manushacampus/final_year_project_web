import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BarSectionService} from "../../../../core/services/api/admin/bar-section.service";
import {InventoryService} from "../../../../core/services/api/admin/inventory.service";
import {ToastrService} from "ngx-toastr";
import {map, Observable, of} from "rxjs";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {SupplierService} from "../../../../core/services/api/admin/supplier.service";
import {PurchaseService} from "../../../../core/services/api/admin/purchase.service";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import numbers = _default.defaults.animations.numbers;

@Component({
  selector: 'app-inventory-purchase-request',
  templateUrl: './inventory-purchase-request.component.html',
  styleUrls: ['./inventory-purchase-request.component.scss']
})
export class InventoryPurchaseRequestComponent implements OnInit{
  constructor(public modalRef: MatDialogRef<InventoryPurchaseRequestComponent>,
              private barSectionService:BarSectionService,
              private supplierService:SupplierService,
              private purchaseService:PurchaseService,
              private inventoryService:InventoryService,
              private dialog:MatDialog,
              private toastrService:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any
  ) {
  }
  options:(any | null)[] = [];
  filteredOptions!: Observable<any[]>;
  supplierId:string="";
  ngOnInit(): void {
    console.log("data",this.data.data.id)
    this.barInventoryForm = new FormGroup({
      supplier: new FormControl('',this.optionValidator.bind(this)),
      qty: new FormControl(0,),
    });

    this.getAllBarAngels();

    this.filteredOptions = (this.barInventoryForm.get("supplier")?.valueChanges|| of([])).pipe(
      map(value => this._filter(value))
    );


  }
  onOptionSelected(selectedSupplierName: string) {
    const selectedSupplier = this.options.find(option => option.name === selectedSupplierName);
    if (selectedSupplier) {
      console.log('Selected Supplier ID:', selectedSupplier.id);
      this.supplierId = selectedSupplier.id
    }
  }
  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  getAllBarAngels(){
    this.supplierService.getAllSupplierByStatus("ACTIVE",0,100).pipe().subscribe(data=>{
      console.log(data.data['content'])
      this.options = data.data['content'].map((item:any) =>
    (  {
            id: item.id,
            name: item.first_name
      })
    );
      console.log("supplier list",this.options);
    });
  }
  private optionValidator(control: AbstractControl): { [key: string]: boolean } | null {
    console.log("validatior",control.value)
    // Check if the control value matches any of the names in the options array
    const isValid = this.options.some(option => option.name === control.value);

    if (control.value && !isValid) {
      return { invalidOption: true };
    }

    return null;
  }
  getErrorMessage() {
    const control = this.barInventoryForm.get('supplier');
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    if (control?.hasError('invalidOption')) {
      return 'Invalid supplier';
    }
    return '';
  }

  barInventoryForm!:FormGroup;

  request() {
    console.log("qty=",this.barInventoryForm.get("qty")?.value)
    console.log("supllier=", this.supplierId)
    console.log("Invenotry=", this.data.data.id)

    this.purchaseService.purchaseRequest(
      this.barInventoryForm.get("qty")?.value,
      this.supplierId,
      this.data.data.id
    ).pipe().subscribe(data=>{
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
