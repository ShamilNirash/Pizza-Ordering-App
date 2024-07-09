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
import swal from 'sweetalert';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    RouterModule,
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
  isChangeInput = false;
  constructor(
    private cartService: CartService,
    private userAuthService: UserAuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.isChangeInput = false;
    this.cartService.getUserCart().subscribe({
      next: (cart: Cart[]) => {
        this.cartOrder = cart;
        this.cartOrder.forEach(cart => {
          cart.cartAmount = cart.sizeAndPrice.price * cart.quantity;
          this.fullAmount += cart.cartAmount;
          cart.smallPrice = cart.allSizeAndPrice.find(
            unit => unit.size == 'S'
          )?.price;
          cart.mediumPrice = cart.allSizeAndPrice.find(
            unit => unit.size == 'M'
          )?.price;
          cart.largePrice = cart.allSizeAndPrice.find(
            unit => unit.size == 'L'
          )?.price;
        });
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
  updatePrice(cart: Cart): void {
    if (cart.sizeAndPrice.size == 'S') {
      cart.sizeAndPrice.price = cart.smallPrice!;
    }
    if (cart.sizeAndPrice.size == 'M') {
      cart.sizeAndPrice.price = cart.mediumPrice!;
    }
    if (cart.sizeAndPrice.size == 'L') {
      cart.sizeAndPrice.price = cart.largePrice!;
    }
    this.isChangeInput = true;
    cart.cartAmount = cart.sizeAndPrice.price * cart.quantity;
  }
  onClickUpdateBtn() {
    this.cartOrder.forEach(cart => {
      if (cart.quantity == 0) {
        this.cartService.deleteUserCart(cart._id).subscribe({
          next: res => {
            if (res.status == 200) {
              this.toastr.success('Cart Update Successfully');
              this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
              };
              this.router.onSameUrlNavigation = 'reload';
              this.router.navigate([this.router.url]);
            }
          },
          error: err => {
            console.log(err);
            this.toastr.error(
              'Oops! Something went wrong. Please try again later.!'
            );
          },
        });
      } else {
        this.cartService
          .updateUserCart(cart._id, {
            quantity: cart.quantity,
            sizeAndPrice: {
              size: cart.sizeAndPrice.size,
              price: cart.sizeAndPrice.price,
            },
          })
          .subscribe({
            next: res => {
              console.log(res);
              if (res.status == 200) {
                this.toastr.success('Cart Update Successfully');
                this.isChangeInput = false;
                this.router.routeReuseStrategy.shouldReuseRoute = function () {
                  return false;
                };
                this.router.onSameUrlNavigation = 'reload';
                this.router.navigate([this.router.url]);
              }
            },
            error: err => {
              console.log(err);
              this.toastr.error(
                'Oops! Something went wrong. Please try again later.!'
              );
            },
          });
      }
    });
  }
}
