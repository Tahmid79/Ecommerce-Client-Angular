import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsMainComponent } from './components/product-details-main/product-details-main.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ProductDetailsMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailsRoutingModule,
  ]
})
export class ProductDetailsModule { }
