import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { UserAuthService } from '../../../services/user-auth/user-auth.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-data-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './person-data-form.component.html',
  styleUrl: './person-data-form.component.scss',
})
export class PersonDataFormComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
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
  emailErrorMessage = '';
  contactNoErrorMessage = '';
  passwordErrorMessage = '';
  addressErrorMessage = '';
  firstNameErrorMessage = '';
  lastNameErrorMessage = '';
  hide = true;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateEmailErrorMessage());

    merge(this.contactNo.statusChanges, this.contactNo.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateContactNoErrorMessage());

    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updatePasswordErrorMessage());

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
  updateEmailErrorMessage() {
    if (this.email.hasError('required')) {
      this.emailErrorMessage = 'This field is required';
    } else if (this.email.hasError('email')) {
      this.emailErrorMessage = 'Not a valid email';
    } else {
      this.emailErrorMessage = '';
    }
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
  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.passwordErrorMessage = 'This field is required';
    } else if (this.password.hasError('minlength')) {
      this.passwordErrorMessage = 'Password must be at least 8 digits long';
    } else {
      this.passwordErrorMessage = '';
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

  //sign in btn
  onClickSignInBtn() {
    if (
      !this.firstName.invalid &&
      !this.lastName.invalid &&
      !this.email.invalid &&
      !this.password.invalid &&
      !this.contactNo.invalid &&
      !this.address.invalid
    ) {
      this.userAuthService
        .signUpPost(
          this.firstName.value!,
          this.lastName.value!,
          this.address.value!,
          this.email.value!,
          this.contactNo.value!,
          this.password.value!
        )
        .subscribe({
          next: res => {
            if (res.status == 200) {
              swal({
                icon: 'success',
                title: 'Sign up successfully',
                buttons: [false],
                timer: 1500,
              });
              setTimeout(() => {
                this.router.navigateByUrl('/');
              }, 2000);
            }
          },
          error: err => {
            console.log(err);
            swal({
              title: 'Oops...',
              text: 'Oops! Something went wrong. Please try again later.!',
              icon: 'error',
              buttons: [false],
              timer: 2000,
            });
          },
        });
    } else {
      swal({
        title: 'Oops...',
        text: 'please correct errors and resubmit!',
        icon: 'error',
        buttons: [false],
        timer: 2000,
      });
    }
  }
}
