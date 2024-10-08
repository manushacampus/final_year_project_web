import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAllComponent } from './job-all.component';

describe('JobAllComponent', () => {
  let component: JobAllComponent;
  let fixture: ComponentFixture<JobAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
