import {Component, input} from '@angular/core';

@Component({
  selector: 'sm-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  value = input<string>();
  label = input<string | null>(null);
  color = input<string>('#ff6b35');
}
