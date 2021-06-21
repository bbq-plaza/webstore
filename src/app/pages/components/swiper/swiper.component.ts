import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  public slides: any = [
    '/assets/example/slide.png',
    '/assets/example/slide.png',
    '/assets/example/slide.png',
    '/assets/example/slide.png',
    '/assets/example/slide.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

}
