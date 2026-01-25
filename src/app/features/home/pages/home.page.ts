import { Component } from '@angular/core';
import {Greetings} from '@app/shared/components/pages/greetings/greetings';
import {Info} from '@app/shared/components/pages/info/info';

@Component({
  selector: 'app-home',
  imports: [
    Greetings,
    Info
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
