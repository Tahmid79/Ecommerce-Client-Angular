import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    HomeMainComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
