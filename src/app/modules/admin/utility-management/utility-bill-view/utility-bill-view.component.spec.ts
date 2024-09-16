import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityBillViewComponent } from './utility-bill-view.component';

describe('UtilityBillViewComponent', () => {
  let component: UtilityBillViewComponent;
  let fixture: ComponentFixture<UtilityBillViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityBillViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityBillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
