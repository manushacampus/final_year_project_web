import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierManagementAllComponent } from './supplier-management-all.component';

describe('SupplierManagementAllComponent', () => {
  let component: SupplierManagementAllComponent;
  let fixture: ComponentFixture<SupplierManagementAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierManagementAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierManagementAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
