import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBodyComponent } from './info-body.component';

describe('InfoBodyComponent', () => {
  let component: InfoBodyComponent;
  let fixture: ComponentFixture<InfoBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
