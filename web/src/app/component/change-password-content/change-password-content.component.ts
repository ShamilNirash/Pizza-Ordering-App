import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { merge } from 'rxjs';
import { UserAuthService } from '../../services/user-auth/user-auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-content',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './change-password-content.component.html',
  styleUrl: './change-password-content.component.scss',
})
export class ChangePasswordContentComponent {
  currentPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  newPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  reNewPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  currentPasswordErrorMessage = '';
  newPasswordErrorMessage = '';
  reNewPasswordErrorMessage = '';
  hideCurrentPw = true;
  hideNewPw = true;
  hideReNewPw = true;
  constructor(
    private userAuthService: UserAuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    merge(this.newPassword.statusChanges, this.newPassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateCurrentPasswordErrorMessage());
    merge(this.reNewPassword.statusChanges, this.reNewPassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateNewPasswordErrorMessage());
    merge(this.currentPassword.statusChanges, this.currentPassword.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateReNewPasswordErrorMessage());
  }
  updateNewPasswordErrorMessage() {
    if (this.newPassword.hasError('required')) {
      this.newPasswordErrorMessage = 'This field is required';
    } else if (this.newPassword.hasError('minlength')) {
      this.newPasswordErrorMessage = 'Password must be at least 8 digits long';
    } else {
      this.newPasswordErrorMessage = '';
    }
  }
  updateReNewPasswordErrorMessage() {
    if (this.reNewPassword.hasError('required')) {
      this.reNewPasswordErrorMessage = 'This field is required';
    } else if (this.reNewPassword.hasError('minlength')) {
      this.reNewPasswordErrorMessage =
        'Password must be at least 8 digits long';
    } else {
      this.reNewPasswordErrorMessage = '';
    }
  }
  updateCurrentPasswordErrorMessage() {
    if (this.currentPassword.hasError('required')) {
      this.currentPasswordErrorMessage = 'This field is required';
    } else if (this.currentPassword.hasError('minlength')) {
      this.currentPasswordErrorMessage =
        'Password must be at least 8 digits long';
    } else {
      this.currentPasswordErrorMessage = '';
    }
  }
  updateBtnClicked() {
    if (
      !this.currentPassword.invalid &&
      !this.newPassword.invalid &&
      !this.reNewPassword.invalid
    ) {
      this.userAuthService
        .updateUserPassword({
          currentPW: this.currentPassword.value,
          newPassword: this.newPassword.value,
          reNewPassword: this.reNewPassword.value,
        })
        .subscribe({
          next: res => {
            if (res.status == 200) {
              this.toastr.success('Updated Password Successfully');
              this.router.navigateByUrl('/profile');
            }
          },
          error: err => {
            this.toastr.error(err.error.message);
            console.log(err);
          },
        });
    }
  }
}
