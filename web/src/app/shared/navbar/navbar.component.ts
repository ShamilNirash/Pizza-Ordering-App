import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faBars,faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IsPersonService } from '../../services/isPerson/is-person.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit{
  cartIcon = faCartShopping;
  barIcon = faBars;
  userIcon = faUser;

  isPersonHave = false;
  isClickBarIcon = false;
  constructor(private router : Router, private isPersonService:IsPersonService){

  }
  ngOnInit():void{
this.isPersonHave=this.isPersonService.getIsPersonValue();
  }
  onClickBarIcon() {
    this.isClickBarIcon = !this.isClickBarIcon;
  }
  onClickSignIn(){
   this.router.navigateByUrl('sign-up');
   
  }
}
