import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOtherFormComponent } from './inventory-other-form.component';

describe('InventoryOtherFormComponent', () => {
  let component: InventoryOtherFormComponent;
  let fixture: ComponentFixture<InventoryOtherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryOtherFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryOtherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
