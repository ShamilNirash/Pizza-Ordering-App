import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardPageBodyComponent } from './menu-card-page-body.component';

describe('MenuCardPageBodyComponent', () => {
  let component: MenuCardPageBodyComponent;
  let fixture: ComponentFixture<MenuCardPageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCardPageBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuCardPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
