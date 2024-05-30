import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { UserAuthService } from '../../../services/user-auth/user-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-security',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
nextIcon= faAngleRight;
constructor(private userAuthService:UserAuthService,private router:Router){}
onClickLogOut(){
  this.userAuthService.deleteCredentials();
  this.router.navigateByUrl('/');
}
}
