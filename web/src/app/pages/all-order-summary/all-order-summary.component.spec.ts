import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrderSummaryComponent } from './all-order-summary.component';

describe('AllOrderSummaryComponent', () => {
  let component: AllOrderSummaryComponent;
  let fixture: ComponentFixture<AllOrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOrderSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
