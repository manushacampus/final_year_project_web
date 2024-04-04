import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWindowFormComponent } from './product-window-form.component';

describe('ProductWindowFormComponent', () => {
  let component: ProductWindowFormComponent;
  let fixture: ComponentFixture<ProductWindowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWindowFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
