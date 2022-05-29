import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})


export class ProductCardComponent implements OnInit {
  // public info = { linkAll: 'Все болеутоляющие', linkMore: 'С таким же веществом' }
  //
  // public packing = { small: '28 шт', big: '56 шт' }

  getInfo() {
    // return this.info
  }

  // disabled = false
  //
  // isActive: boolean = false;

  // toggleActive() {
  //   this.isActive = !this.isActive;
  // }

  // public list: string[] = LIST;
  // public activeItem: string;
  //
  // public onSelectItem(item: string): void {
  //   this.activeItem = item;
  // }

  //В наличии?
  // isStock = true



  // TODO: Я не знаю почему без "!" ниче не работает - HELP
  // @Input() card: Card
  @Input() card!: Card

  // @Output() onToogle = new EventEmitter()


  // imgAvifUrl: string = './assets/img/card_1.avif'
  // imgWebpUrl: string = './assets/img/card_1.webp'
  // imgPngUrl: string = './assets/img/card_1.png'

  ngOnInit() {

  }
}
