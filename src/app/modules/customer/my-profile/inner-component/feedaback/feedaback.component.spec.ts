import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedabackComponent } from './feedaback.component';

describe('FeedabackComponent', () => {
  let component: FeedabackComponent;
  let fixture: ComponentFixture<FeedabackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedabackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedabackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
