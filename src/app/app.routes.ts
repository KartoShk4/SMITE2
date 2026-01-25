import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.router').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'news',
    loadChildren: () => import('./features/news/news.router').then((m) => m.NEWS_ROUTES)
  },
  {
    path: 'update',
    loadChildren: () => import('./features/update/update.router').then((m) => m.UPDATE_ROUTES)
  }
];
