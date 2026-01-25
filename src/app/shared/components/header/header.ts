import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Logo} from '@app/shared/components/logo/logo';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    Logo,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
