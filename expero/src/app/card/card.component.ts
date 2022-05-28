import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  // TODO: Я не знаю почему без "!" ниче не работает HELP
  // @Input() card: Card
  @Input() card!: Card

  imgAvifUrl: string = './assets/img/card_1.avif'
  imgWebpUrl: string = './assets/img/card_1.webp'
  imgPngUrl: string = './assets/img/card_1.png'

  ngOnInit() {
    console.log('ngOnInit')

  }
}
