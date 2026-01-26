import {Injectable, signal, computed, inject} from '@angular/core';
import {Update} from '../models/update.model';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UpdateService {
  private http = inject(HttpClient);

  // Сигналы для состояния загрузки
  private readonly _isLoading = signal(true);
  private readonly _isLoaded = signal(false);
  private readonly _currentPage = signal(1);
  private readonly _itemsPerPage = signal(9);
  private readonly _allNews = signal<Update[]>([]);

  // Публичные readonly сигналы
  readonly isLoading = this._isLoading.asReadonly();
  readonly isLoaded = this._isLoaded.asReadonly();
  readonly currentPage = this._currentPage.asReadonly();
  readonly itemsPerPage = this._itemsPerPage.asReadonly();

  // Вычисляемые сигналы
  readonly totalPages = computed(() =>
    Math.ceil(this._allNews().length / this._itemsPerPage())
  );

  readonly paginatedNews = computed(() => {
    const itemsPerPage = this._itemsPerPage();
    const currentPage = this._currentPage();
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return this._allNews().slice(start, end);
  });

  readonly latestThree = computed(() =>
    [...this._allNews()]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3)
  );

  // Загрузка данных из JSON
  loadNews() {
    // Если уже загружено, не загружаем повторно
    if (this._isLoaded()) {
      return;
    }

    this._isLoading.set(true);
    console.log('Начинаю загрузку обновлений...');

    this.http.get<{updates: Update[]}>('assets/data/updates.json')
      .subscribe({
        next: (data: {updates: Update[]}) => {
          console.log('Обновления загружены:', data);
          // Сортировка по дате (новые сверху)
          const sortedNews = data.updates.sort(
            (a: Update, b: Update) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          this._allNews.set(sortedNews);
          this._isLoaded.set(true);
          console.log('Обновления сохранены в сигнал:', this._allNews());
          this._isLoading.set(false);
        },
        error: (error: any) => {
          console.error('Ошибка загрузки обновлений:', error);
          this._isLoading.set(false);
        }
      });
  }

  // Методы навигации
  nextPage() {
    if (this._currentPage() < this.totalPages()) {
      this._currentPage.update(page => page + 1);
    }
  }

  prevPage() {
    if (this._currentPage() > 1) {
      this._currentPage.update(page => page - 1);
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this._currentPage.set(page);
    }
  }

  // Сброс на первую страницу
  resetPage() {
    this._currentPage.set(1);
  }
}
