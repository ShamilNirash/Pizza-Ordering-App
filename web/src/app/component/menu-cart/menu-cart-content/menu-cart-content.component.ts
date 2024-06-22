import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { CartService } from '../../../services/cart/cart.service';
import { Cart } from '../../../interfaces/cart';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserAuthService } from '../../../services/user-auth/user-auth.service';
import { User } from '../../../interfaces/user';
@Component({
  selector: 'app-menu-cart-content',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgFor,
  ],
  templateUrl: './menu-cart-content.component.html',
  styleUrl: './menu-cart-content.component.scss',
})
export class MenuCartContentComponent implements OnInit {
  noteIcon = faNoteSticky;
  cartOrder!: Cart[];
  fullAmount: number = 0;
  userAddress!: string;
  N = [1, 2, 3, 4];
  sizes = [{ value: 'S' }, { value: 'M' }, { value: 'L' }];
  constructor(
    private cartService: CartService,
    private userAuthService: UserAuthService
  ) {}
  ngOnInit(): void {
    this.cartService.getUserCart().subscribe({
      next: (cart: Cart[]) => {
        this.cartOrder = cart;
        this.cartOrder.forEach(cart => {
          this.fullAmount += cart.sizeAndPrice.price * cart.quantity;
        });
        /*         this.fullAmount=this.cartOrder.
         */
      },
      error: err => {
        console.log(err);
      },
    });
    this.userAuthService.getUserInformation().subscribe({
      next: (user: User) => {
        this.userAddress = user.address;
      },
    });
  }
}
