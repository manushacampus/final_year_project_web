import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTaskAllComponent } from './employee-task-all.component';

describe('EmployeeTaskAllComponent', () => {
  let component: EmployeeTaskAllComponent;
  let fixture: ComponentFixture<EmployeeTaskAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTaskAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTaskAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
