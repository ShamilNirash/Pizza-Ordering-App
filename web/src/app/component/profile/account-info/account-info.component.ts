import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { UserAuthService } from '../../../services/user-auth/user-auth.service';
import { User } from '../../../interfaces/user';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss',
})
export class AccountInfoComponent implements OnInit {
  userIcon = faUser;
  nextIcon = faAngleRight;
  userObject = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    contactNo: '',
  };

  constructor(private userAuthService: UserAuthService) {}
  ngOnInit(): void {
    if (this.userAuthService.getId()) {
      this.userAuthService.getUserInformation().subscribe({
        next: (user: User) => {
          this.userObject.firstName = user.firstName;
          this.userObject.lastName = user.lastName;
          this.userObject.address = user.address;
          this.userObject.email = user.email;
          this.userObject.contactNo = user.contactNo;
        },
      });
    }
  }
}
