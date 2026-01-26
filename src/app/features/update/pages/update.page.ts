import {Component, inject, OnInit} from '@angular/core';
import {UpdateService} from '../services/update.service';
import {Card} from '@app/shared/components/common/card/card';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-update',
  imports: [Card, CommonModule],
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  private readonly updateService = inject(UpdateService);

  // Данные для шаблона
  readonly paginatedNews = this.updateService.paginatedNews;
  readonly currentPage = this.updateService.currentPage;
  readonly totalPages = this.updateService.totalPages;
  readonly isLoading = this.updateService.isLoading;
  readonly isLoaded = this.updateService.isLoaded;

  ngOnInit() {
    // Загружаем обновления при инициализации компонента
    this.updateService.loadNews();
  }

  // Методы для пагинации
  nextPage() { this.updateService.nextPage(); }
  prevPage() { this.updateService.prevPage(); }
  goToPage(page: number) { this.updateService.goToPage(page); }
}
