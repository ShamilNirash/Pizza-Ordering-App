import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { WelcomePictureComponent } from '../../component/home/welcome-picture/welcome-picture.component';
import { AboutUsComponent } from '../../component/home/about-us/about-us.component';
import { OurRestaurantImagesComponent } from '../../component/home/our-restaurant-images/our-restaurant-images.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,WelcomePictureComponent,AboutUsComponent,OurRestaurantImagesComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
