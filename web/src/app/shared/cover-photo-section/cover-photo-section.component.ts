import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cover-photo-section',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './cover-photo-section.component.html',
  styleUrl: './cover-photo-section.component.scss'
})
export class CoverPhotoSectionComponent {
@Input() coverSectionDetails ={imgUrl:'',h1Name:'',h3Name:''};
}
