import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJobAllComponent } from './employee-job-all.component';

describe('EmployeeJobAllComponent', () => {
  let component: EmployeeJobAllComponent;
  let fixture: ComponentFixture<EmployeeJobAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeJobAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeJobAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
