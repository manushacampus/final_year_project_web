import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteManagementAllComponent } from './website-management-all.component';

describe('WebsiteManagementAllComponent', () => {
  let component: WebsiteManagementAllComponent;
  let fixture: ComponentFixture<WebsiteManagementAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteManagementAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteManagementAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
