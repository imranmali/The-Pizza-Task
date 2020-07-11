import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Route } from './core/route.service';

const routes: Routes = [
  Route.withShell([
    {
      path: '',
      loadChildren: './item/item.module#ItemModule'
    },
    {
      path: 'cart',
      loadChildren: './cart/cart.module#CartModule'
    },
    {
      path: 'order-history',
      loadChildren: './order/order-history/order.module#OrderModule'
    }
   
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
