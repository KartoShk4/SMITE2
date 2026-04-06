import {Injectable, signal, computed, inject} from '@angular/core';
import {Update} from '../models/update.model';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UpdateService {
  private readonly updateData: Update[] = [
    {
      id: '1',
      image: '/images/gods/gods-long/hiron.png',
      tag: 'Обычное обновление',
      title: 'НОВОЕ ОБНОВЛЕНИЕ: обновлённый «Joust» и возвращение Хирона',
      desc: 'Тренируйся под руководством Хирона, сражайся в возрождённом режиме «Joust», и обрушь «Владычество Архидемона» в новой саге Кукулькана.\n',
      createdAt: '2026-01-26'
    },
    {
      id: '2',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Обычное обновление',
      title: 'НОВОЕ ОБНОВЛЕНИЕ: обновлённый «Joust» и возвращение Хирона',
      desc: 'Тренируйся под руководством Хирона, сражайся в возрождённом режиме «Joust», и обрушь «Владычество Архидемона» в новой саге Кукулькана.\n',
      createdAt: '2026-01-26'
    },
    {
      id: '3',
      image: '/images/gods/gods-long/kukulcan.png',
      tag: 'Обычное обновление',
      title: 'НОВОЕ ОБНОВЛЕНИЕ: обновлённый «Joust» и возвращение Хирона',
      desc: 'Тренируйся под руководством Хирона, сражайся в возрождённом режиме «Joust», и обрушь «Владычество Архидемона» в новой саге Кукулькана.\n',
      createdAt: '2026-01-26'
    }
  ];

  // Сигналы для состояния загрузки
  private readonly _isLoading = signal(true);
  private readonly _isLoaded = signal(false);
  private readonly _currentPage = signal(1);
  private readonly _itemsPerPage = signal(9);
  private readonly _allUpdate = signal<Update[]>([]);

  // Публичные readonly сигналы
  readonly isLoading = this._isLoading.asReadonly();
  readonly isLoaded = this._isLoaded.asReadonly();
  readonly currentPage = this._currentPage.asReadonly();
  readonly itemsPerPage = this._itemsPerPage.asReadonly();

  // Вычисляемые сигналы
  readonly totalPages = computed(() =>
    Math.ceil(this._allUpdate().length / this._itemsPerPage())
  );

  readonly paginatedUpdate = computed(() => {
    const itemsPerPage = this._itemsPerPage();
    const currentPage = this._currentPage();
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return this._allUpdate().slice(start, end);
  });

  readonly latestThree = computed(() =>
    [...this._allUpdate()]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3)
  );

  // Загрузка данных
  loadUpdate() {
    // Если уже загружено, не загружаем повторно
    if (this._isLoaded()) {
      return;
    }

    this._isLoading.set(true);
    console.log('Начинаю загрузку обновлений...');

    try {
      console.log('Данные обновлений:', this.updateData);
      // Сортировка по дате (новые сверху)
      const sortedUpdate = [...this.updateData].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      this._allUpdate.set(sortedUpdate);
      this._isLoaded.set(true);
      console.log('Обновления сохранены в сигнал:', this._allUpdate());
      this._isLoading.set(false);
    } catch (error) {
      console.error('Ошибка загрузки обновлений:', error);
      this._isLoading.set(false);
    }
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
