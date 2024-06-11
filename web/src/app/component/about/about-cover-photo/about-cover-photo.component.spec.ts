import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoverPhotoComponent } from './about-cover-photo.component';

describe('AboutCoverPhotoComponent', () => {
  let component: AboutCoverPhotoComponent;
  let fixture: ComponentFixture<AboutCoverPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCoverPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutCoverPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
