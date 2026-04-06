import {Component, Input} from '@angular/core';
import {ShortCard} from '@app/shared/components/common/card/short-card/short-card';
import {RouterLink} from '@angular/router';
import {News} from '@app/features/news/models/news.model';

@Component({
  selector: 'sm-last-news',
  imports: [
    ShortCard,
    RouterLink
  ],
  templateUrl: './last-news.html',
  styleUrl: './last-news.scss',
})
export class LastNews {
  @Input({ required: true })
  newsList!: News[];
}
