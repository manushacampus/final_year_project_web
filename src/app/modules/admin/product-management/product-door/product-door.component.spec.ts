import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDoorComponent } from './product-door.component';

describe('ProductDoorComponent', () => {
  let component: ProductDoorComponent;
  let fixture: ComponentFixture<ProductDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDoorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
