import {Component, inject, signal} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from '../common/logo/logo';
import { ThemeService } from '@app/shared/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly themeService = inject(ThemeService);

  readonly theme = this.themeService.theme;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
