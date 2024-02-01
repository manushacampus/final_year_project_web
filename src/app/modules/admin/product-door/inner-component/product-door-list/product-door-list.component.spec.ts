import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDoorListComponent } from './product-door-list.component';

describe('ProductDoorListComponent', () => {
  let component: ProductDoorListComponent;
  let fixture: ComponentFixture<ProductDoorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDoorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDoorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
