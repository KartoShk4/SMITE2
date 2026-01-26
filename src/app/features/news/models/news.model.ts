export interface News {
  id: string;          // для routerLink / trackBy
  image: string;       // картинка карточки
  tag: string;         // тип новости
  title: string;       // заголовок
  desc: string;        // описание
  createdAt: string;   // дата
}
