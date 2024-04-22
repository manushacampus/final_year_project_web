import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistrationComponent } from './customer-registration.component';

describe('CustomerRegistraionComponent', () => {
  let component: CustomerRegistrationComponent;
  let fixture: ComponentFixture<CustomerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
