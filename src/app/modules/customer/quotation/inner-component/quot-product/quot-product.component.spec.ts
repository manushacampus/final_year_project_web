import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotProductComponent } from './quot-product.component';

describe('QuotProductComponent', () => {
  let component: QuotProductComponent;
  let fixture: ComponentFixture<QuotProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
