import { Component } from '@angular/core';

export interface Card {
  name: string
  description: string
  manufacturer?: string
  country?: string
  price?: string
  count?: string
  imgAvifUrl?: string
  imgWebpUrl?: string
  imgPngUrl?: string
  info?: any // TODO:
  pack?: any // TODO:
  //В наличии?
  // isStock?: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'expero';

  // public info = [{ linkAll: 'Все болеутоляющие', linkMore: 'С таким же веществом' }]
  // public pack = [{ smallSize: '28 шт', bigSize: '56 шт' }]
  //
  // getPack() {
  //   return this.pack
  // }

  cards: Card[] = [
    {
      name: 'Дротаверин ',
      description: 'Дротаверин Реневал таблетки 40 мг, таблетки, 28 шт.  длинное название препарата в две строки выводим, ' +
        'остaлось штук Дротаверин Реневал таблетки 40 мг, таблетки, 28 шт.  длинное название препарата в две строки выводим, ' +
        'остaлось штук',
      manufacturer: 'Обновление ПФК, ',
      country: 'Россия ',
      price: '83 ₽',
      count: '23',
      imgAvifUrl: './assets/img/card_1.avif',
      imgWebpUrl: './assets/img/card_1.webp',
      imgPngUrl: './assets/img/card_1.png',
      pack: { smallSize: '28 шт', bigSize: '56 шт' },
      info: { linkAll: 'Все болеутоляющие', linkMore: 'С таким же веществом' },
      //В наличии?
      // isStock: true
    },

    {
      name: 'Нифуроксазид ',
      description: 'Элюфор, 200 мг, суспензия для приема внутрь, \n' +
        '90 мл, 1 шт.',
      manufacturer: 'Озон, ',
      country: 'Россия ',
      price: '262 ₽',
      count: '28',
      imgAvifUrl: './assets/img/imgnone.avif',
      imgWebpUrl: './assets/img/imgnone.webp',
      imgPngUrl: './assets/img/imgnone.png',
      pack: { smallSize: '28 шт', bigSize: '56 шт' },
      info: { linkAll: 'Все болеутоляющие', linkMore: 'С таким же веществом' }
    },

    {
      name: 'Reckitt Benckiser ',
      description: 'Scholl GelActiv стельки для занятий спортом 2 шт. ',
      manufacturer: 'Озон, ',
      country: 'Россия ',
      price: '262 ₽',
      count: '28',
      imgAvifUrl: './assets/img/gel.avif',
      imgWebpUrl: './assets/img/gel.webp',
      imgPngUrl: './assets/img/gel.png'
    },
  ]
}
