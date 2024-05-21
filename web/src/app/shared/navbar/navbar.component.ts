import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faBars,faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
  userIcon = faUser;

  isPersonHave = false;
  isClickBarIcon = false;
  constructor(private router : Router){

  }
  onClickBarIcon() {
    this.isClickBarIcon = !this.isClickBarIcon;
  }
  onClickSignIn(){
   this.router.navigateByUrl('sign-up');
   
  }
}
