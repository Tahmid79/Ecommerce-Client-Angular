import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path : 'cart' , loadChildren:
      ()=> import('./shopping-cart/shopping-cart-routing.module').then(m => m.ShoppingCartRoutingModule)
  },
  {
    path : 'details' , loadChildren:
      ()=> import('./product-details/product-details-routing.module').then(m => m.ProductDetailsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
