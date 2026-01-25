import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './shared/components/header/header';
import {Footer} from './shared/components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CarouselModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SMITE2');
}
