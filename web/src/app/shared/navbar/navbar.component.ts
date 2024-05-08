import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  cartIcon = faCartShopping;
  barIcon = faBars;

  isPersonHave = false;
  isClickBarIcon = false;
  onClickBarIcon() {
    this.isClickBarIcon = !this.isClickBarIcon;
  }
}
