import {Component, inject, OnInit} from '@angular/core';
import {NewsService} from '@app/features/news/services/news.service';
import {LongCard} from '@app/shared/components/common/card/long-card/long-card';

@Component({
  standalone: true,
  selector: 'app-news',
  imports: [
    LongCard
  ],
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private readonly newsService = inject(NewsService);

  // Данные для шаблона
  readonly paginatedNews = this.newsService.paginatedNews;
  readonly currentPage = this.newsService.currentPage;
  readonly totalPages = this.newsService.totalPages;
  readonly isLoading = this.newsService.isLoading;
  readonly isLoaded = this.newsService.isLoaded;

  ngOnInit() {
    // Загружаем новости при инициализации компонента
    console.log('NewsPage инициализирован, загружаю новости...');
    this.newsService.loadNews();
  }

  // Методы для пагинации
  nextPage() {
    this.newsService.nextPage();
  }

  prevPage() {
    this.newsService.prevPage();
  }

  goToPage(page: number) {
    this.newsService.goToPage(page);
  }
}
