import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCartContentComponent } from './menu-cart-content.component';

describe('MenuCartContentComponent', () => {
  let component: MenuCartContentComponent;
  let fixture: ComponentFixture<MenuCartContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCartContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuCartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
