import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AboutCoverPhotoComponent } from '../../component/about/about-cover-photo/about-cover-photo.component';
import { AboutDescriptionComponent } from '../../component/about/about-description/about-description.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,AboutCoverPhotoComponent,AboutDescriptionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
