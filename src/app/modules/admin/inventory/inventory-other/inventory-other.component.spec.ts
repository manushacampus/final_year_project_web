import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOtherComponent } from './inventory-other.component';

describe('InventoryOtherComponent', () => {
  let component: InventoryOtherComponent;
  let fixture: ComponentFixture<InventoryOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
