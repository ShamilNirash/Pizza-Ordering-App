import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserAuthService } from '../../services/user-auth/user-auth.service';
import { Router, RouterModule } from '@angular/router';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { User } from '../../interfaces/user';
import { CartService } from '../../services/cart/cart.service';
import { Cart } from '../../interfaces/cart';
import { CommonModule, NgFor } from '@angular/common';
import { OrderService } from '../../services/order/order.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    NgFor,
    CommonModule,
  ],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss',
})
export class CheckoutFormComponent implements OnInit {
  relevantCart!: Cart[];
  totalAmount: number = 0;
  productItems: {}[] = [];
  contactNo = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
    Validators.pattern('^[0-9]*$'),
  ]);
  address = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]*$'),
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]*$'),
  ]);
  note = new FormControl('');
  contactNoErrorMessage = '';
  addressErrorMessage = '';
  firstNameErrorMessage = '';
  lastNameErrorMessage = '';
  hide = true;

  constructor(
    private userAuthService: UserAuthService,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    merge(this.contactNo.statusChanges, this.contactNo.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateContactNoErrorMessage());

    merge(this.address.statusChanges, this.address.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateAddressErrorMessage());
    merge(this.firstName.statusChanges, this.firstName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateFirstNameErrorMessage());
    merge(this.lastName.statusChanges, this.lastName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateLastNameErrorMessage());
  }
  ngOnInit(): void {
    this.userAuthService.getUserInformation().subscribe({
      next: (user: User) => {
        this.firstName.setValue(user.firstName);
        this.lastName.setValue(user.lastName);
        this.address.setValue(user.address);
        this.contactNo.setValue(user.contactNo);
      },
      error: err => {
        console.log(err);
      },
    });
    this.cartService.getUserCart().subscribe({
      next: (cart: Cart[]) => {
        this.relevantCart = cart;
        cart.forEach(unit => {
          this.totalAmount += unit.sizeAndPrice.price * unit.quantity;
        });
      },
    });
  }
  updateContactNoErrorMessage() {
    if (this.contactNo.hasError('required')) {
      this.contactNoErrorMessage = 'This field is required';
    } else if (
      this.contactNo.hasError('minlength') ||
      this.contactNo.hasError('maxlength')
    ) {
      this.contactNoErrorMessage = 'not a valid contact number';
    } else if (this.contactNo.hasError('pattern')) {
      this.contactNoErrorMessage = 'Contact number must contain only digits';
    } else {
      this.contactNoErrorMessage = '';
    }
  }

  updateAddressErrorMessage() {
    if (this.address.hasError('required')) {
      this.addressErrorMessage = 'This field is required';
    } else {
      this.addressErrorMessage = '';
    }
  }
  updateFirstNameErrorMessage() {
    if (this.firstName.hasError('required')) {
      this.firstNameErrorMessage = 'This field is required';
    } else if (this.firstName.hasError('pattern')) {
      this.firstNameErrorMessage = 'Name must contain only letters';
    } else {
      this.firstNameErrorMessage = '';
    }
  }
  updateLastNameErrorMessage() {
    if (this.lastName.hasError('required')) {
      this.lastNameErrorMessage = 'This field is required';
    } else if (this.lastName.hasError('pattern')) {
      this.lastNameErrorMessage = 'Name must contain only letters';
    } else {
      this.lastNameErrorMessage = '';
    }
  }

  clickedOnGoToPaymentBtn() {
    this.relevantCart.forEach(unit => {
      this.productItems.push({
        name: unit.pizza_name,
        productSizeAndPrice: {
          size: unit.sizeAndPrice.size,
          price: unit.sizeAndPrice.price,
        },
        quantity: unit.quantity,
      });
    });
    this.orderService
      .createNewOrder({
        name: this.firstName.value + ' ' + this.lastName.value,
        contactNo: this.contactNo.value,
        cartItems: this.productItems,
        totalAmount: this.totalAmount,
        address: this.address.value,
        notes: this.note.value,
        isPayed: false,
      })
      .subscribe({
        next: res => {
          if (res.status == 200) {
            this.router.navigateByUrl('/check-out-2');
          }
        },
        error: err => {
          console.log('error occur', err);
          swal({
            title: 'Oops...',
            text: 'Oops! Something went wrong. Please try again later.!',
            icon: 'error',
            buttons: [false],
            timer: 2000,
          });
        },
      });
  }
}
