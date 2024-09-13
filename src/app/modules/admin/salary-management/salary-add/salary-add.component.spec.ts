import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAddComponent } from './salary-add.component';

describe('SalaryAddComponent', () => {
  let component: SalaryAddComponent;
  let fixture: ComponentFixture<SalaryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
