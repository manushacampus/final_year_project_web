import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderAllComponent } from './customer-order-all.component';

describe('CustomerOrderAllComponent', () => {
  let component: CustomerOrderAllComponent;
  let fixture: ComponentFixture<CustomerOrderAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
