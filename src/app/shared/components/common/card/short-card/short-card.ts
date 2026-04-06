import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Tag} from '@app/shared/components/common/tag/tag';
import {NgOptimizedImage} from '@angular/common';
import {News} from '@app/features/news/models/news.model';
import {Update} from '@app/features/update/models/update.model';

@Component({
  selector: 'sm-short-card',
  imports: [
    RouterLink,
    Tag,
    NgOptimizedImage
  ],
  templateUrl: './short-card.html',
  styleUrl: './short-card.scss',
})
export class ShortCard {
  @Input({required: true})
  data!: News | Update;

  @Input({ required: true }) baseRoute!: string;
  @Input() fixedHeight = false;
  @Input() compact = false;
  @Input() priority = false;
}
