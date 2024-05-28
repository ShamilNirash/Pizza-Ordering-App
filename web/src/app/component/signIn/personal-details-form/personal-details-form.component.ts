import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { merge } from 'rxjs';
import { UserAuthService } from '../../../services/user-auth/user-auth.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-details-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './personal-details-form.component.html',
  styleUrl: './personal-details-form.component.scss',
})
export class PersonalDetailsFormComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  errorMessage = '';
  hide = true;
  emailField: string = '';
  passwordField: string = '';
  constructor(private userAuthService: UserAuthService, private router:Router) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }
  onClickSignInBtn() {
    if (
      !this.email.invalid &&
      !this.password.invalid
    ) {
      this.userAuthService
        .signInPost(this.email.value!, this.password.value!)
        .subscribe({
          next: res => {
            this.router.navigateByUrl('/');
  },
          error: err => {
            if (err.status == 404) {
              swal({
                title: 'Oops...',
                text: 'User Not Found!',
                icon: 'error',
                buttons: [false],
                timer: 2000,
              });
            } else {
              swal({
                title: 'Oops...',
                text: 'An unexpected error occurred. Please try again later.!',
                icon: 'error',
                buttons: [false],
                timer: 2000,
              });
            }
            console.error('Sign in failed', err);
            this.email.reset();
            this.password.reset();
          },
        });
    } else {
      swal({
        title: 'Oops...',
        text: 'sign in failed!',
        icon: 'error',
        buttons: [false],
        timer: 2000,
      });
      this.email.reset();
      this.password.reset();
    }
  }
}
