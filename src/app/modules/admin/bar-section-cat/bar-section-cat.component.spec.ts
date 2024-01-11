import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSectionCatComponent } from './bar-section-cat.component';

describe('BarSectionCatComponent', () => {
  let component: BarSectionCatComponent;
  let fixture: ComponentFixture<BarSectionCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarSectionCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSectionCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
