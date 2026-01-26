import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Tag} from '@app/shared/components/common/tag/tag';
import {News} from '@app/features/news/models/news.model';

@Component({
  selector: 'sm-card',
  imports: [
    RouterLink,
    Tag
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({required: true})
  news!: News;

  @Input()
  fixedHeight = false;

  @Input()
  compact = false;
}
