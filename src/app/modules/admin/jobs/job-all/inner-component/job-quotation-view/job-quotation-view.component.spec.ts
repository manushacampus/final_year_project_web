import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobQuotationViewComponent } from './job-quotation-view.component';

describe('JobQuotationViewComponent', () => {
  let component: JobQuotationViewComponent;
  let fixture: ComponentFixture<JobQuotationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobQuotationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobQuotationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
