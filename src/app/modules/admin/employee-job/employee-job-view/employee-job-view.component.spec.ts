import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJobViewComponent } from './employee-job-view.component';

describe('EmployeeJobViewComponent', () => {
  let component: EmployeeJobViewComponent;
  let fixture: ComponentFixture<EmployeeJobViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeJobViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeJobViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
