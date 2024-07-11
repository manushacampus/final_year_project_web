import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBarFormComponent } from './inventory-bar-form.component';

describe('InventoryBarFormComponent', () => {
  let component: InventoryBarFormComponent;
  let fixture: ComponentFixture<InventoryBarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
