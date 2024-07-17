import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/profile/header/header.component';
import { InfoBodyComponent } from '../../component/update-userInfo/info-body/info-body.component';

@Component({
  selector: 'app-update-user-info',
  standalone: true,
  imports: [HeaderComponent,InfoBodyComponent],
  templateUrl: './update-user-info.component.html',
  styleUrl: './update-user-info.component.scss'
})
export class UpdateUserInfoComponent {

}
