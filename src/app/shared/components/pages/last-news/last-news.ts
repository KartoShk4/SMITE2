import {Component, Input} from '@angular/core';
import {Card} from '@app/shared/components/common/card/card';
import {RouterLink} from '@angular/router';
import {News} from '@app/features/news/models/news.model';

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
  @Input({ required: true })
  newsList!: News[];
}
