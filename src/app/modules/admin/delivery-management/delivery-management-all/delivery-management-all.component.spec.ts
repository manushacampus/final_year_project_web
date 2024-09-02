import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryManagementAllComponent } from './delivery-management-all.component';

describe('DeliveryManagementAllComponent', () => {
  let component: DeliveryManagementAllComponent;
  let fixture: ComponentFixture<DeliveryManagementAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryManagementAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryManagementAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
