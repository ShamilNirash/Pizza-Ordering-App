import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { WelcomePictureComponent } from '../../component/welcome-picture/welcome-picture.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,WelcomePictureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
