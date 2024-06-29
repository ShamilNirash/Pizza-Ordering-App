import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartShopping,
  faBars,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserAuthService } from '../../services/user-auth/user-auth.service';
import { User } from '../../interfaces/user';
import { CartService } from '../../services/cart/cart.service';
import { Cart } from '../../interfaces/cart';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    FontAwesomeModule,
    CommonModule,
    RouterModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
  ],
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
  noOfOrdersInCart = 0;
  routerUrl!: string;
  constructor(
    private router: Router,
    private userAuthService: UserAuthService,
    private cartService: CartService
  ) {
    this.routerUrl = this.router.url;
  }
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
    this.cartService.getUserCart().subscribe({
      next: (cart: Cart[]) => {
        cart.forEach(unit => {
          this.noOfOrdersInCart = this.noOfOrdersInCart + unit.quantity;
        });
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
