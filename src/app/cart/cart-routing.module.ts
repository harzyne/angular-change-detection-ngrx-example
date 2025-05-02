import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartModule } from './cart.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'cart', loadChildren: () => import('./cart.module').then(m => m.CartModule) }
    ])
  ],
  exports: [RouterModule]
})
export class CartRoutingModule {}
