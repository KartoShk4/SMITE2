import {Injectable, signal, computed} from '@angular/core';
import {News} from '@app/features/news/models/news.model';

@Injectable({providedIn: 'root'})
export class NewsService {
  private readonly newsData: News[] = [
    {
      id: '1',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Объявление',
      title: 'Изменения баланса в 8 сезоне',
      desc: 'Внесены существенные изменения в характеристики богов и предметов для нового соревновательного сезона',
      createdAt: '2025-01-25'
    },
    {
      id: '2',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Новость',
      title: 'Турнирные обновления',
      desc: 'Новые правила и призовой фонд для предстоящих чемпионатов',
      createdAt: '2025-01-24'
    },
    {
      id: '3',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Акция',
      title: 'Специальное предложение',
      desc: 'Уникальные скидки на премиум контент и косметические предметы',
      createdAt: '2025-01-23'
    },
    {
      id: '4',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Обновление',
      title: 'Исправления багов',
      desc: 'Команда разработчиков исправила критические ошибки в игровом клиенте',
      createdAt: '2025-01-22'
    },
    {
      id: '5',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Событие',
      title: 'Лимитированное событие',
      desc: 'Уникальные награды и временные достижения ждут вас в специальном режиме',
      createdAt: '2025-01-21'
    },
    {
      id: '6',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Гайд',
      title: 'Советы для новичков',
      desc: 'Полное руководство по основам игры и первым шагам в SMITE 2',
      createdAt: '2025-01-20'
    },
    {
      id: '7',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Стрим',
      title: 'Прямая трансляция чемпионата',
      desc: 'Следите за матчами профессиональных игроков на официальном Twitch канале',
      createdAt: '2025-01-19'
    },
    {
      id: '8',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Объявление',
      title: 'Расписание сервера',
      desc: 'Технические работы и плановые обновления на следующей неделе',
      createdAt: '2025-01-18'
    },
    {
      id: '9',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Новость',
      title: 'Новые скины',
      desc: 'Коллекция косметических предметов для ваших любимых богов',
      createdAt: '2025-01-17'
    },
    {
      id: '10',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Акция',
      title: 'Бесплатный уикенд',
      desc: 'Получите доступ к премиум контенту совершенно бесплатно',
      createdAt: '2025-01-16'
    },
    {
      id: '11',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Обновление',
      title: 'UI улучшения',
      desc: 'Обновленный интерфейс с новыми функциями и улучшенной навигацией',
      createdAt: '2025-01-15'
    },
    {
      id: '12',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Событие',
      title: 'Зимний фестиваль',
      desc: 'Праздничные события и уникальные награды в честь зимних праздников',
      createdAt: '2025-01-14'
    },
    {
      id: '13',
      image: '/images/gods/gods-long/kukulcan.png',
      tag: 'Внутриигровое событие',
      title: '«Дробовик Куку» уже здесь!',
      desc: 'Новое: Кукулькан — Аспект Шквала.\n' +
        'Смени роль с бэклайна на лес, используя этот аспект с высоким взрывным уроном на ближней дистанции.',
      createdAt: '2026-01-02'
    },
    {
      id: '14',
      image: '/images/gods/gods-long/discordia.png',
      tag: 'Внутриигровое событие',
      title: 'Аспект керри-мага для Дискордии: уже в игре с 16 января!',
      desc: 'Освой новый стиль игры, в котором Дискордия меняет хаос на доминирование.',
      createdAt: '2026-01-16'
    }
  ];

  // Сигналы для состояния загрузки
  private readonly _isLoading = signal(true); // Начинаем с true
  private readonly _isLoaded = signal(false); // Флаг успешной загрузки
  private readonly _currentPage = signal(1);
  private readonly _itemsPerPage = signal(9);
  private readonly _allNews = signal<News[]>([]);

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

  // Загрузка данных
  loadNews() {
    // Если уже загружено, не загружаем повторно
    if (this._isLoaded()) {
      return;
    }

    this._isLoading.set(true);
    console.log('Начинаю загрузку новостей...');

    try {
      console.log('Данные новостей:', this.newsData);
      // Сортировка по дате (новые сверху)
      const sortedNews = [...this.newsData].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      this._allNews.set(sortedNews);
      this._isLoaded.set(true);
      console.log('Новости сохранены в сигнал:', this._allNews());
      this._isLoading.set(false);
    } catch (error) {
      console.error('Ошибка загрузки новостей:', error);
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
