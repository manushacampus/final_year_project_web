import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteManagementFormComponent } from './website-management-form.component';

describe('WebsiteManagementFormComponent', () => {
  let component: WebsiteManagementFormComponent;
  let fixture: ComponentFixture<WebsiteManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteManagementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
