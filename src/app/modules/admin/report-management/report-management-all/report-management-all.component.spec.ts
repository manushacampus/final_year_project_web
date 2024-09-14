import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportManagementAllComponent } from './report-management-all.component';

describe('ReportManagementAllComponent', () => {
  let component: ReportManagementAllComponent;
  let fixture: ComponentFixture<ReportManagementAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportManagementAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportManagementAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
