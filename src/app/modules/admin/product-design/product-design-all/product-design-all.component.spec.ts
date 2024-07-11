import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesignAllComponent } from './product-design-all.component';

describe('ProductDesignAllComponent', () => {
  let component: ProductDesignAllComponent;
  let fixture: ComponentFixture<ProductDesignAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDesignAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDesignAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
