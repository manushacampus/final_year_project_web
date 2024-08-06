import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEditViewComponent } from './job-edit-view.component';

describe('JobEditViewComponent', () => {
  let component: JobEditViewComponent;
  let fixture: ComponentFixture<JobEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobEditViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
