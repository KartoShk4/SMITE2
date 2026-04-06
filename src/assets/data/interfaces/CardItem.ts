export interface CardItem {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
  tag?: string;
  date?: string;
  route: string | any[];
}
