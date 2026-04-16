import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'smite2-theme';

  readonly theme = signal<'light' | 'dark'>(this.getSavedTheme());

  private getSavedTheme(): 'light' | 'dark' {
    const saved = localStorage.getItem(this.THEME_KEY);
    return saved === 'dark' ? 'dark' : 'light';
  }

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('dark', this.theme() === 'dark');
      localStorage.setItem(this.THEME_KEY, this.theme());
    });
  }

  toggleTheme() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
  }
}
