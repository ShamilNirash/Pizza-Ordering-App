import { Component } from '@angular/core';
import{ FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-welcome-picture',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './welcome-picture.component.html',
  styleUrl: './welcome-picture.component.scss'
})
export class WelcomePictureComponent {
   nextIcon= faCircleArrowRight;
}
