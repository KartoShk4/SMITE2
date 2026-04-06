import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Tag} from '@app/shared/components/common/tag/tag';
import {NgOptimizedImage} from '@angular/common';
import {News} from '@app/features/news/models/news.model';
import {Update} from '@app/features/update/models/update.model';

@Component({
  selector: 'sm-long-card',
  imports: [
    RouterLink,
    Tag,
    NgOptimizedImage
  ],
  templateUrl: './long-card.html',
  styleUrl: './long-card.scss',
})
export class LongCard {
  @Input({ required: true }) data!: News | Update;

  @Input({ required: true }) baseRoute!: string;
  @Input() fixedHeight = false;
  @Input() compact = false;
  @Input() priority = false;
}
