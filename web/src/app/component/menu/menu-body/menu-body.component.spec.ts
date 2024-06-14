import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBodyComponent } from './menu-body.component';

describe('MenuBodyComponent', () => {
  let component: MenuBodyComponent;
  let fixture: ComponentFixture<MenuBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
