import {Component, inject, OnInit} from '@angular/core';
import {Greetings} from '@app/shared/components/pages/greetings/greetings';
import {Info} from '@app/shared/components/pages/info/info';
import {LastNews} from '@app/shared/components/pages/last-news/last-news';
import {LastUpdates} from '@app/shared/components/pages/last-updates/last-updates';
import {NewsService} from '@app/features/news/services/news.service';
import {UpdateService} from '@app/features/update/services/update.service';

@Component({
  selector: 'app-home',
  imports: [
    Greetings,
    Info,
    LastNews,
    LastUpdates
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private readonly newsService = inject(NewsService);
  private readonly updateService = inject(UpdateService);

  // signal с 3 последними новостями и обновлениями
  readonly lastNews = this.newsService.latestThree;
  readonly lastUpdates = this.updateService.latestThree;

  ngOnInit() {
    // Загружаем новости и обновления при инициализации главной страницы
    this.newsService.loadNews();
    this.updateService.loadUpdate();
  }
}
