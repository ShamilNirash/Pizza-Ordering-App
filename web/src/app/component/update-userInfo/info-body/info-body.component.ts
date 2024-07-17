import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { merge } from 'rxjs';
import { UserAuthService } from '../../../services/user-auth/user-auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-body',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './info-body.component.html',
  styleUrl: './info-body.component.scss',
})
export class InfoBodyComponent implements OnInit {
  isEnableBtn = true;
  firstName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]*$'),
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]*$'),
  ]);
  contactNo = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
    Validators.pattern('^[0-9]*$'),
  ]);
  address = new FormControl('', [Validators.required]);
  firstNameErrorMessage = '';
  lastNameErrorMessage = '';
  contactNoErrorMessage = '';
  addressErrorMessage = '';

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    merge(this.firstName.statusChanges, this.firstName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateFirstNameErrorMessage());
    merge(this.lastName.statusChanges, this.lastName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateLastNameErrorMessage());
  }
  ngOnInit(): void {
    this.userAuthService.getUserInformation().subscribe({
      next: user => {
        this.firstName.setValue(user.firstName);
        this.lastName.setValue(user.lastName);
        this.address.setValue(user.address);
        this.contactNo.setValue(user.contactNo);
      },
      error: err => {
        console.log(err);
      },
    });
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
  changeTheText() {
    this.isEnableBtn = false;
  }
  updateBtnClick() {
    if (
      !this.firstName.invalid &&
      !this.lastName.invalid &&
      !this.address.invalid &&
      !this.contactNo.invalid
    ) {
      this.userAuthService
        .updateUserDetails({
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          address: this.address.value,
          contactNo: this.contactNo.value,
        })
        .subscribe({
          next: res => {
            if (res.status == 200) {
              this.toastr.success('User Information Updated Successfully');
              this.router.navigateByUrl('/profile');
            }
          },
          error: err => {
            console.log(err);
            this.toastr.error('Error Occur');
          },
        });
    }
  }
}
