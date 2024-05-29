import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyAndDataComponent } from './privacy-and-data.component';

describe('PrivacyAndDataComponent', () => {
  let component: PrivacyAndDataComponent;
  let fixture: ComponentFixture<PrivacyAndDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyAndDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyAndDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
