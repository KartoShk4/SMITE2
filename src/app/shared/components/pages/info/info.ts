import { Component } from '@angular/core';

@Component({
  selector: 'sm-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info {

  infoCards = [
    {
      title: '120+',
      subtitle: 'Игровые боги',
      desc: 'Из 8 различных пантеонов',
    },
    {
      title: '300+',
      subtitle: 'Игровых предметов',
      desc: 'Обладающий уникальными способностями и характеристиками',
    },
    {
      title: 'Ежемесячно',
      subtitle: 'Обновления и исправления',
      desc: 'Регулярные изменения баланса и новый контент',
    }
  ];


}
