import {Component, inject, OnInit} from '@angular/core';
import {UpdateService} from '../services/update.service';
import {CommonModule} from '@angular/common';
import {LongCard} from '@app/shared/components/common/card/long-card/long-card';

@Component({
  standalone: true,
  selector: 'app-update',
  imports: [LongCard, CommonModule],
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  private readonly updateService = inject(UpdateService);

  // Данные для шаблона
  readonly paginatedUpdate = this.updateService.paginatedUpdate;
  readonly currentPage = this.updateService.currentPage;
  readonly totalPages = this.updateService.totalPages;
  readonly isLoading = this.updateService.isLoading;
  readonly isLoaded = this.updateService.isLoaded;

  ngOnInit() {
    // Загружаем обновления при инициализации компонента
    console.log('UpgradePage инициализирован, загружаю обновления...');
    this.updateService.loadUpdate();
  }

  // Методы для пагинации
  nextPage() { this.updateService.nextPage(); }
  prevPage() { this.updateService.prevPage(); }
  goToPage(page: number) { this.updateService.goToPage(page); }
}
