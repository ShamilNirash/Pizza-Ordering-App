import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ContactUsFormComponent } from '../../component/contact-us/contact-us-form/contact-us-form.component';
import { CoverPhotoSectionComponent } from '../../shared/cover-photo-section/cover-photo-section.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CoverPhotoSectionComponent,
    ContactUsFormComponent,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  sectionDetails = {
    imgUrl:
      "url('../../../../assets/images/ContactUsSection/contactUs-cover-photo.jpg')",
    h1Name: 'Contact Us',
    h3Name: 'Home / Contact Us',
  };
}
