import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPurchaseRequestComponent } from './inventory-purchase-request.component';

describe('InventoryPurchaseRequestComponent', () => {
  let component: InventoryPurchaseRequestComponent;
  let fixture: ComponentFixture<InventoryPurchaseRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryPurchaseRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryPurchaseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
