import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from "../shared/shared.module";
import {HomeMainComponent} from "./components/home-main/home-main.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";


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
