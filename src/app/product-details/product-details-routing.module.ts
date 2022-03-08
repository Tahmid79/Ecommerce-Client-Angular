import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsMainComponent} from "./components/product-details-main/product-details-main.component";

const routes: Routes = [
  { path: '' , component: ProductDetailsMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
