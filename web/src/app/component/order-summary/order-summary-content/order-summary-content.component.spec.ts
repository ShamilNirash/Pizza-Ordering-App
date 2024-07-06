import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryContentComponent } from './order-summary-content.component';

describe('OrderSummaryContentComponent', () => {
  let component: OrderSummaryContentComponent;
  let fixture: ComponentFixture<OrderSummaryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSummaryContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderSummaryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
