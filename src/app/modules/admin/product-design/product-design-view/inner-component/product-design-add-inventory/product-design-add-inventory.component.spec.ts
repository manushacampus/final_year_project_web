import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesignAddInventoryComponent } from './product-design-add-inventory.component';

describe('ProductDesignAddInventoryComponent', () => {
  let component: ProductDesignAddInventoryComponent;
  let fixture: ComponentFixture<ProductDesignAddInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDesignAddInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDesignAddInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
