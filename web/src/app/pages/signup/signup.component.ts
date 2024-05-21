import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/signInUp/header/header.component';
import { PersonalDetailsFormComponent } from '../../component/signIn/personal-details-form/personal-details-form.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeaderComponent,PersonalDetailsFormComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
