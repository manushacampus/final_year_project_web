import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryManagementAllComponent } from './salary-management-all.component';

describe('SalaryManagementAllComponent', () => {
  let component: SalaryManagementAllComponent;
  let fixture: ComponentFixture<SalaryManagementAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryManagementAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryManagementAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
