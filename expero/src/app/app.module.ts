import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardComponent } from "./card/product-card.component";

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

  transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 100;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

@NgModule({
    declarations: [
        AppComponent,
        ProductCardComponent,
        TruncatePipe
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
