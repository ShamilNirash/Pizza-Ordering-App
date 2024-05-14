import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurResturantImagesComponent } from './our-restaurant-images.component';

describe('OurResturantImagesComponent', () => {
  let component: OurResturantImagesComponent;
  let fixture: ComponentFixture<OurResturantImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurResturantImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurResturantImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
