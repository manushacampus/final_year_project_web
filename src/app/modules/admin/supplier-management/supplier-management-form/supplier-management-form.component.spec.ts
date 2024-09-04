import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierManagementFormComponent } from './supplier-management-form.component';

describe('SupplierManagementFormComponent', () => {
  let component: SupplierManagementFormComponent;
  let fixture: ComponentFixture<SupplierManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierManagementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
