import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBoardComponent } from './inventory-board.component';

describe('InventoryBoardComponent', () => {
  let component: InventoryBoardComponent;
  let fixture: ComponentFixture<InventoryBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
