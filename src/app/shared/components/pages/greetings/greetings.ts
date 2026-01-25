import { Component } from '@angular/core';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import {Button} from '@app/shared/components/button/button';

@Component({
  selector: 'app-greetings',
  imports: [
    CarouselModule,
    Button
  ],
  templateUrl: './greetings.html',
  styleUrl: './greetings.scss',
})
export class Greetings {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    dots: false,
    nav: false
  };
}
