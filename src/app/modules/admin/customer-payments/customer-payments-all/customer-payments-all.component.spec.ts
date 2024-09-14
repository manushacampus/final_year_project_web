import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentsAllComponent } from './customer-payments-all.component';

describe('CustomerPaymentsAllComponent', () => {
  let component: CustomerPaymentsAllComponent;
  let fixture: ComponentFixture<CustomerPaymentsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPaymentsAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPaymentsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
