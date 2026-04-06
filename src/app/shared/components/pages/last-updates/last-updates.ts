import {Component, Input} from '@angular/core';
import {ShortCard} from '@app/shared/components/common/card/short-card/short-card';
import {RouterLink} from '@angular/router';
import {Update} from '@app/features/update/models/update.model';

@Component({
  selector: 'sm-last-updates',
  imports: [
    ShortCard,
    RouterLink
  ],
  templateUrl: './last-updates.html',
  styleUrl: './last-updates.scss',
})
export class LastUpdates {
  @Input({ required: true })
  newsList!: Update[];
}
