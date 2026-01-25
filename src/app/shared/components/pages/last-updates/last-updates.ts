import { Component } from '@angular/core';
import {Card} from '@app/shared/components/common/card/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'sm-last-updates',
  imports: [
    Card,
    RouterLink
  ],
  templateUrl: './last-updates.html',
  styleUrl: './last-updates.scss',
})
export class LastUpdates {

}
