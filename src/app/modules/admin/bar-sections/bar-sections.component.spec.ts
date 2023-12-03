import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSectionsComponent } from './bar-sections.component';

describe('BarSectionsComponent', () => {
  let component: BarSectionsComponent;
  let fixture: ComponentFixture<BarSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
