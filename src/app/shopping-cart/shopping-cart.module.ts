import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CartMainComponent } from './cart-main/cart-main.component';


@NgModule({
  declarations: [
    CartMainComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
