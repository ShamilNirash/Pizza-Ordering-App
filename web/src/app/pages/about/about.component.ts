import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AboutDescriptionComponent } from '../../component/about/about-description/about-description.component';
import { CoverPhotoSectionComponent } from '../../shared/cover-photo-section/cover-photo-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CoverPhotoSectionComponent,
    AboutDescriptionComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  sectionDetails = {
    imgUrl:
      "url('../../../../assets/images/AboutSection/about-cover-photo.jpg')",
    h1Name: 'About Us',
    h3Name: 'Home / About Us',
  };
}
