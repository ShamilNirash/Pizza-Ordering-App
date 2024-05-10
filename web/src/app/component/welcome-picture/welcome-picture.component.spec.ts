import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePictureComponent } from './welcome-picture.component';

describe('WelcomePictureComponent', () => {
  let component: WelcomePictureComponent;
  let fixture: ComponentFixture<WelcomePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
