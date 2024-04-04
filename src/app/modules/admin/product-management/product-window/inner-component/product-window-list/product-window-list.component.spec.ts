import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWindowListComponent } from './product-window-list.component';

describe('ProductWindowListComponent', () => {
  let component: ProductWindowListComponent;
  let fixture: ComponentFixture<ProductWindowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWindowListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWindowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
