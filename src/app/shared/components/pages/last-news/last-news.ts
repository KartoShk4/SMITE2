import { Component } from '@angular/core';
import {Card} from '@app/shared/components/common/card/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'sm-last-news',
  imports: [
    Card,
    RouterLink
  ],
  templateUrl: './last-news.html',
  styleUrl: './last-news.scss',
})
export class LastNews {

}
