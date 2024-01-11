import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSectionAllComponent } from './bar-section-all.component';

describe('BarSectionAllComponent', () => {
  let component: BarSectionAllComponent;
  let fixture: ComponentFixture<BarSectionAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarSectionAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSectionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
