import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryManagementPaymentComponent } from './delivery-management-payment.component';

describe('DeliveryManagementPaymentComponent', () => {
  let component: DeliveryManagementPaymentComponent;
  let fixture: ComponentFixture<DeliveryManagementPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryManagementPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryManagementPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
