import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/signInUp/header/header.component';
import { PersonalDetailsFormComponent } from '../../component/signIn/personal-details-form/personal-details-form.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [HeaderComponent,PersonalDetailsFormComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  headerSet= {"signDescription":"Don't you have an account ?","signOption":"Sign up","signUrl":"/sign-up"}

}
