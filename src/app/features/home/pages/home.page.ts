import { Component } from '@angular/core';
import {Greetings} from '@app/shared/components/pages/greetings/greetings';

@Component({
  selector: 'app-home',
  imports: [
    Greetings
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
