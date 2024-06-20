import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardPageComponent } from './menu-card-page.component';

describe('MenuCardPageComponent', () => {
  let component: MenuCardPageComponent;
  let fixture: ComponentFixture<MenuCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
