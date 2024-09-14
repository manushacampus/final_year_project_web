import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPaymentViewComponent } from './customer-payment-view.component';

describe('CustomerPaymentViewComponent', () => {
  let component: CustomerPaymentViewComponent;
  let fixture: ComponentFixture<CustomerPaymentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPaymentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
