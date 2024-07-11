import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJobImageComponent } from './employee-job-image.component';

describe('EmployeeJobImageComponent', () => {
  let component: EmployeeJobImageComponent;
  let fixture: ComponentFixture<EmployeeJobImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeJobImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeJobImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
