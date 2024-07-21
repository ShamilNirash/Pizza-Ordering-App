import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/profile/header/header.component';
import { ChangePasswordContentComponent } from '../../component/change-password-content/change-password-content.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [HeaderComponent,ChangePasswordContentComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

}
