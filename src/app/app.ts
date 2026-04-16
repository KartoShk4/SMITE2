import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './shared/components/header/header';
import {Footer} from './shared/components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {ContentModal} from '@app/shared/components/modals/content-modal/content-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CarouselModule, ContentModal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SMITE2');
}
