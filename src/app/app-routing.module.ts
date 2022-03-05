import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path : 'cart' , loadChildren:
      ()=> import('./shopping-cart/shopping-cart-routing.module').then(m => m.ShoppingCartRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
