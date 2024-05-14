import { Component , ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-our-restaurant-images',
  standalone: true,
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './our-restaurant-images.component.html',
  styleUrl: './our-restaurant-images.component.scss'
})
export class OurRestaurantImagesComponent {

  images = [{url:"../../../assets/images/shop img 1.jpg"},{url:"../../../assets/images/shop img 2.jpg"},{url:"../../../assets/images/shop img 3.jpg"},{url:"../../../assets/images/shop img 4.jpg"}];

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
	
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
}
}