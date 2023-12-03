import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSectionComponent } from './bar-section.component';

describe('BarSectionComponent', () => {
  let component: BarSectionComponent;
  let fixture: ComponentFixture<BarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
