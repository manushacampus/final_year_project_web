import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesignFormComponent } from './product-design-form.component';

describe('ProductDesignFormComponent', () => {
  let component: ProductDesignFormComponent;
  let fixture: ComponentFixture<ProductDesignFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDesignFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDesignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
