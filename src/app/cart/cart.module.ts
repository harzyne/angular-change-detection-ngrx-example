import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart.component';
import { CartItemComponent } from './components/cart-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from '../store/cart.reducer';
import { CartEffects } from './cart.effects';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects]),
    RouterModule.forChild([
      { path: '', component: CartComponent }
    ])
  ]
})
export class CartModule {}
