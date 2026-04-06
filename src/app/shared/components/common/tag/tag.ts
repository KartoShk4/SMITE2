import {Component, computed, input} from '@angular/core';

type TagType = 'Объявление' | 'Новость' | 'Акция' | 'Обновление' | 'Событие' | 'Гайд' | 'Стрим' | 'Внутриигровое событие' | 'Обычное обновление';

@Component({
  selector: 'sm-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  value = input<string>();
  label = input<string | null>(null);
  color = input<string>();
  type = input<TagType>();
  size = input<'small' | 'medium' | 'large'>('medium');

  // Автоматическое определение цвета и текста на основе типа
  computedColor = computed((): string => {
    // Если явно указан цвет, используем его
    const explicitColor = this.color();
    if (explicitColor) return explicitColor;

    // Определяем тип тега
    const tagType = this.type() || (this.label() as TagType) || (this.value() as TagType);

    // Возвращаем цвет на основе типа
    switch (tagType) {
      case 'Объявление':
        return '#ff6b35'; // Оранжевый
      case 'Новость':
        return '#2196F3'; // Синий
      case 'Акция':
        return '#4CAF50'; // Зеленый
      case 'Обновление':
      case 'Обычное обновление':
        return '#FF9800'; // Оранжевый темный
      case 'Событие':
      case 'Внутриигровое событие':
        return '#9C27B0'; // Фиолетовый
      case 'Гайд':
        return '#00BCD4'; // Голубой
      case 'Стрим':
        return '#F44336'; // Красный
      default:
        return '#ff6b35'; // Цвет по умолчанию
    }
  });

  // Автоматическое определение текста на основе типа
  computedText = computed((): string => {
    // Если явно указан текст, используем его
    if (this.label()) return this.label()!;
    if (this.value()) return this.value()!;

    // Определяем тип тега и возвращаем соответствующий текст
    const tagType = this.type();
    if (!tagType) return '';

    switch (tagType) {
      case 'Объявление':
        return 'Объявление';
      case 'Новость':
        return 'Новость';
      case 'Акция':
        return 'Акция';
      case 'Обновление':
        return 'Обновление';
      case 'Обычное обновление':
        return 'Обновление';
      case 'Событие':
        return 'Событие';
      case 'Внутриигровое событие':
        return 'Игровое событие';
      case 'Гайд':
        return 'Гайд';
      case 'Стрим':
        return 'Стрим';
      default:
        return tagType;
    }
  });

  // Вычисляемый цвет текста на основе цвета фона
  textColor = computed(() => {
    const bgColor = this.computedColor();
    if (!bgColor) return '#ffffff'; // Цвет по умолчанию
    return this.isLightColor(bgColor) ? '#000000' : '#ffffff';
  });

  private isLightColor(color: string): boolean {
    // Проверяем, что цвет в правильном формате
    if (!color || !color.startsWith('#')) return false;

    try {
      // Преобразуем hex в RGB и проверяем яркость
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);

      // Формула для определения яркости
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128;
    } catch {
      // В случае ошибки парсинга возвращаем false (темный цвет)
      return false;
    }
  }
}
