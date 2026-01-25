import { Component } from '@angular/core';
import {Greetings} from '@app/shared/components/pages/greetings/greetings';
import {Info} from '@app/shared/components/pages/info/info';
import {LastNews} from '@app/shared/components/pages/last-news/last-news';
import {LastUpdates} from '@app/shared/components/pages/last-updates/last-updates';

@Component({
  selector: 'app-home',
  imports: [
    Greetings,
    Info,
    LastNews,
    LastUpdates
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
