import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSectionsFormComponent } from './bar-sections-form.component';

describe('BarSectionsFormComponent', () => {
  let component: BarSectionsFormComponent;
  let fixture: ComponentFixture<BarSectionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarSectionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSectionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
