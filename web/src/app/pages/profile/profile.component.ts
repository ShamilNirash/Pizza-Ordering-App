import { Component } from '@angular/core';
import { ProfileNavbarComponent } from '../../component/profile/profile-navbar/profile-navbar.component';
import { AccountInfoComponent } from '../../component/profile/account-info/account-info.component';
import { NgIf } from '@angular/common';
import { SecurityComponent } from '../../component/profile/security/security.component';
import { PrivacyAndDataComponent } from '../../component/profile/privacy-and-data/privacy-and-data.component';
import { HeaderComponent } from '../../component/profile/header/header.component';
import { OrderComponent } from '../../component/profile/order/order.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileNavbarComponent,AccountInfoComponent,NgIf,SecurityComponent,PrivacyAndDataComponent,HeaderComponent,OrderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  navbarClickedBtn:string='accountInfo';
  handleButtonClick(name:string){
    this.navbarClickedBtn=name;
  }
}
