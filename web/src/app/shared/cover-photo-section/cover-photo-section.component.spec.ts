import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPhotoSectionComponent } from './cover-photo-section.component';

describe('CoverPhotoSectionComponent', () => {
  let component: CoverPhotoSectionComponent;
  let fixture: ComponentFixture<CoverPhotoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverPhotoSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoverPhotoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
