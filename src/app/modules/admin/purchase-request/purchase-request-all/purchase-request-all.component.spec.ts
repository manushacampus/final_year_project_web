import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestAllComponent } from './purchase-request-all.component';

describe('PurchaseRequestAllComponent', () => {
  let component: PurchaseRequestAllComponent;
  let fixture: ComponentFixture<PurchaseRequestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseRequestAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseRequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
