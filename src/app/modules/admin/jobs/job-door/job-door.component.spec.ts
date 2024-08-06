import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDoorComponent } from './job-door.component';

describe('JobDoorComponent', () => {
  let component: JobDoorComponent;
  let fixture: ComponentFixture<JobDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
