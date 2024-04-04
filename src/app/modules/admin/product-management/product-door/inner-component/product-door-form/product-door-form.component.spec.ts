import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDoorFormComponent } from './product-door-form.component';

describe('ProductDoorFormComponent', () => {
  let component: ProductDoorFormComponent;
  let fixture: ComponentFixture<ProductDoorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDoorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDoorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
