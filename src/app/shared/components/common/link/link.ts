import { Component, computed, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sm-link',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './link.html',
  styleUrl: './link.scss',
})
export class LinkButton {
  typeBtn = input<'primary' | 'secondary' | 'ghost'>('primary');
  size = input<'sm' | 'md' | 'lg'>('md');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  routerLink = input<string | string[] | undefined>(undefined);
  href = input<string | undefined>(undefined);
  target = input<'_self' | '_blank'>('_self');

  isDisabled = computed(() => this.disabled() || this.loading());

  classes = computed(() => ({
    'sm-button': true,
    [`sm-button--${this.typeBtn()}`]: true,
    [`sm-button--${this.size()}`]: true,
    'sm-button--disabled': this.isDisabled(),
    'sm-button--loading': this.loading(),
  }));
}
