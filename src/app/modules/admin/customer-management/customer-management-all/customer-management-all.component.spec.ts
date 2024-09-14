import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerManagmentAllComponent } from './customer-managment-all.component';

describe('CustomerManagmentAllComponent', () => {
  let component: CustomerManagmentAllComponent;
  let fixture: ComponentFixture<CustomerManagmentAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerManagmentAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerManagmentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
