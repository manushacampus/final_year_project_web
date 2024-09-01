import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBoardFormComponent } from './inventory-board-form.component';

describe('InventoryBoardFormComponent', () => {
  let component: InventoryBoardFormComponent;
  let fixture: ComponentFixture<InventoryBoardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBoardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBoardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
