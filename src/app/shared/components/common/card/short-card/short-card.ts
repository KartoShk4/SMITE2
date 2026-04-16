import { Component, inject, Input } from '@angular/core';
import { Tag } from '@app/shared/components/common/tag/tag';
import { NgOptimizedImage } from '@angular/common';
import { News } from '@app/features/news/models/news.model';
import { Update } from '@app/features/update/models/update.model';
import { NewsService } from '@app/features/news/services/news.service';
import { UpdateService } from '@app/features/update/services/update.service';

type ContentType = 'news' | 'update';

@Component({
  selector: 'sm-short-card',
  standalone: true,
  imports: [Tag, NgOptimizedImage],
  templateUrl: './short-card.html',
  styleUrl: './short-card.scss',
})
export class ShortCard {
  private readonly newsService = inject(NewsService);
  private readonly updateService = inject(UpdateService);

  @Input({ required: true }) data!: News | Update;
  @Input({ required: true }) contentType!: ContentType;
  @Input() fixedHeight = false;
  @Input() priority = false;

  openModal(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.contentType === 'news') {
      this.newsService.openNewsModal(this.data.id);
    } else if (this.contentType === 'update') {
      this.updateService.openUpdateModal(this.data.id);
    }
  }
}
