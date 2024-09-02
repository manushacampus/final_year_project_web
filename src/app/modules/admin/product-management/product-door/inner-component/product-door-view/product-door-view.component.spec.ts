import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDoorViewComponent } from './product-door-view.component';

describe('ProductDoorViewComponent', () => {
  let component: ProductDoorViewComponent;
  let fixture: ComponentFixture<ProductDoorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDoorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDoorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
