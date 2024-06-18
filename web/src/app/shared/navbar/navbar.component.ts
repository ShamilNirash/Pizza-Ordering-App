import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartShopping,
  faBars,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserAuthService } from '../../services/user-auth/user-auth.service';
import { User } from '../../interfaces/user';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  cartIcon = faCartShopping;
  barIcon = faBars;
  userIcon = faUser;
  isPersonHave = false;
  isClickBarIcon = false;
  userName: string = '';
  constructor(
    private router: Router,
    private userAuthService: UserAuthService
  ) {}
  ngOnInit(): void {
    if (this.userAuthService.getId()) {
      this.isPersonHave = true;
    }
    this.userAuthService.getUserInformation().subscribe({
      next: (user: User) => {
        this.userName = user.firstName;
      },
      error: err => {
        console.log(err);
      },
    });
  }

  onClickBarIcon() {
    this.isClickBarIcon = !this.isClickBarIcon;
  }
}
