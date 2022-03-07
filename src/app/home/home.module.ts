import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeMainComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
