import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAllComponent } from './cart-all.component';

describe('CartAllComponent', () => {
  let component: CartAllComponent;
  let fixture: ComponentFixture<CartAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
