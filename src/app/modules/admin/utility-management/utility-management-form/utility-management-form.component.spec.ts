import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityManagementFormComponent } from './utility-management-form.component';

describe('UtilityManagementFormComponent', () => {
  let component: UtilityManagementFormComponent;
  let fixture: ComponentFixture<UtilityManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityManagementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
