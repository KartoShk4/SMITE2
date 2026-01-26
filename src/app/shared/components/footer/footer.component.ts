import { Component } from '@angular/core';
import {Logo} from '@app/shared/components/common/logo/logo';
import {RouterLink} from '@angular/router';
import {Button} from '@app/shared/components/common/button/button';

@Component({
  selector: 'app-footer',
  imports: [
    Logo,
    RouterLink,
    Button
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class Footer {

}
