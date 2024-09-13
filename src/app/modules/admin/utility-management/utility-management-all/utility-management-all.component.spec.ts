import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityManagementAllComponent } from './utility-management-all.component';

describe('UtilityManagementAllComponent', () => {
  let component: UtilityManagementAllComponent;
  let fixture: ComponentFixture<UtilityManagementAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityManagementAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityManagementAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
