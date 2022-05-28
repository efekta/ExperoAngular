import { Component } from '@angular/core';

export interface Card {
  name: string
  description: string
  manufacturer: string
  country: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'expero';

  cards: Card[] = [
    {
      name: 'Дротаверин ',
      description: 'Дротаверин Реневал таблетки 40 мг, таблетки, 28 шт.  длинное название препарата в две строки выводим, ' +
        'остaлось штук Дротаверин Реневал таблетки 40 мг, таблетки, 28 шт.  длинное название препарата в две строки выводим, ' +
        'остaлось штук',
      manufacturer: 'Обновление ПФК, ',
      country: 'Россия ',
    },

    {
      name: 'Дротаверин ',
      description: 'Дротаверин Реневал таблетки 40 мг, таблетки, 28 шт.  длинное название препарата в две строки выводим, ' +
        'остaлось штук Дротаверин Реневал таблетки 40 мг, таблетки, 28 шт.  длинное название препарата в две строки выводим, ' +
        'остaлось штук',
      manufacturer: 'Обновление ПФК, ',
      country: 'Россия ',
    },

    {
      name: 'Дротаверин ',
      description: 'Дротаверин Реневал таблетки 40 мг, таблетки, 28 шт.  длинное название препарата в две строки выводим, ' +
        'остaлось штук Дротаверин Реневал таблетки 40 мг, таблетки, 28 шт.  длинное название препарата в две строки выводим, ' +
        'остaлось штук',
      manufacturer: 'Обновление ПФК, ',
      country: 'Россия ',
    },

  ]
}
