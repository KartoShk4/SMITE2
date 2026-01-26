import {Component, computed, input} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'sm-button',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  typeBtn = input<'primary' | 'secondary' | 'ghost'>('primary');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');
  size = input<'sm' | 'md' | 'lg'>('md');
  routerLink = input<string | string[]>();

  classes = computed(() => ({
    'sm-button': true,
    [`sm-button--${this.typeBtn()}`]: true,
    [`sm-button--${this.size()}`]: true,
    'sm-button--disabled': this.disabled(),
    'sm-button--loading': this.loading(),
  }));
}
