import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationOrdersViewComponent } from './quotation-orders-view.component';

describe('QuotationOrdersViewComponent', () => {
  let component: QuotationOrdersViewComponent;
  let fixture: ComponentFixture<QuotationOrdersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationOrdersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
