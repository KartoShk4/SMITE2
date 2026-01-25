import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Tag} from '@app/shared/components/common/tag/tag';

@Component({
  selector: 'sm-card',
  imports: [
    RouterLink,
    Tag
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  lastNews = [
    {
      images: '/images/card-news.png',
      tag: 'Объявление',
      title: 'Изменения баланса в 8 сезоне',
      desc: 'Внесены существенные изменения в характеристики богов и предметов для нового соревновательного сезона',
      date: '25.01.2026',
    },
    {
      images: '/images/card-news.png',
      tag: 'Новость',
      title: 'Изменения баланса в 8 сезоне',
      desc: 'Внесены существенные изменения в характеристики богов и предметов для нового соревновательного сезона',
      date: '25.01.2026',
    },
    {
      images: '/images/card-news.png',
      tag: 'Акция',
      title: 'Изменения баланса в 8 сезоне',
      desc: 'Внесены существенные изменения в характеристики богов и предметов для нового соревновательного сезона',
      date: '25.01.2026',
    },
  ];


}
