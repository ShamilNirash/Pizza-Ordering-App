import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCoverPhotoComponent } from './contact-us-cover-photo.component';

describe('ContactUsCoverPhotoComponent', () => {
  let component: ContactUsCoverPhotoComponent;
  let fixture: ComponentFixture<ContactUsCoverPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsCoverPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUsCoverPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
