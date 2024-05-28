import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/signInUp/header/header.component';
import { PersonDataFormComponent } from '../../component/signUp/person-data-form/person-data-form.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent,PersonDataFormComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
 headerSet= {"signDescription":"Do you have an account ?","signOption":"Sign in","signUrl":"/sign-in"}
}
