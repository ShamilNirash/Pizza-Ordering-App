import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.scss',
})
export class ContactUsFormComponent {
  fullName = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]*$'),
  ]);
  contactNo = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
    Validators.pattern('^[0-9]*$'),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  note = new FormControl('', Validators.required);
  emailErrorMessage = '';
  contactNoErrorMessage = '';
  noteErrorMessage = '';
  fullNameErrorMessage = '';

  constructor(private router:Router) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateEmailErrorMessage());
    merge(this.contactNo.statusChanges, this.contactNo.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateContactNoErrorMessage());
    merge(this.fullName.statusChanges, this.fullName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateFullNameErrorMessage());
    merge(this.note.statusChanges, this.note.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateNoteErrorMessage());
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
  updateFullNameErrorMessage() {
    if (this.fullName.hasError('required')) {
      this.fullNameErrorMessage = 'This field is required';
    } else if (this.fullName.hasError('pattern')) {
      this.fullNameErrorMessage = 'Name must contain only letters';
    } else {
      this.fullNameErrorMessage = '';
    }
  }
  updateNoteErrorMessage() {
    if (this.note.hasError('required')) {
      this.noteErrorMessage = 'This field is required';
    } else {
      this.noteErrorMessage = '';
    }
  }
  onClickSubmit() {
    if (
      !this.fullName.invalid &&
      !this.contactNo.invalid &&
      !this.email.invalid &&
      !this.note.invalid
    ) {
      swal({
        icon: 'success',
        title: 'Sign up successfully',
        buttons: [false],
        timer: 1500,
      });
      this.fullName.reset();
      this.contactNo.reset();
      this.email.reset();
      this.note.reset();
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
