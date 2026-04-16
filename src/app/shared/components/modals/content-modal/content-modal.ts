import { Component, inject, OnInit, OnDestroy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '@app/features/news/services/news.service';
import { UpdateService } from '@app/features/update/services/update.service';
import { Tag } from '@app/shared/components/common/tag/tag';
import { News } from '@app/features/news/models/news.model';
import { Update } from '@app/features/update/models/update.model';

type ContentItem = News | Update;

@Component({
  selector: 'sm-content-modal',
  standalone: true,
  imports: [CommonModule, Tag],
  templateUrl: './content-modal.html',
  styleUrl: './content-modal.scss',
})
export class ContentModal implements OnInit, OnDestroy {
  private readonly newsService = inject(NewsService);
  private readonly updateService = inject(UpdateService);
  private readonly escapeHandler = this.handleEscape.bind(this);

  readonly content = computed<ContentItem | null>(() => {
    const news = this.newsService.selectedNews();
    const update = this.updateService.selectedUpdate();
    return news || update || null;
  });

  readonly isOpen = computed<boolean>(() => {
    return this.newsService.isModalOpen() || this.updateService.isModalOpen();
  });

  close() {
    this.newsService.closeModal();
    this.updateService.closeModal();
  }

  ngOnInit() {
    document.addEventListener('keydown', this.escapeHandler);
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.escapeHandler);
  }

  private handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isOpen()) {
      this.close();
    }
  }
}
