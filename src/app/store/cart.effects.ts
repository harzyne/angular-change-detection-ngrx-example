import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';
import { loadCartFromLocalStorage, addCartItem } from './cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private store: Store) {}

  loadCartFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadCartFromLocalStorage),
        tap(() => {
          const cart = localStorage.getItem('cart');
          if (cart) {
            // Load cart into state
            console.log('Loaded cart from localStorage:', JSON.parse(cart));
          }
        })
      ),
    { dispatch: false }
  );

  // Effect to save to localStorage on cart update
  saveCartToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addCartItem, removeCartItem, updateCartItem),
        tap(() => {
          const cartState = this.store.select(selectCartItems);
          localStorage.setItem('cart', JSON.stringify(cartState));
        })
      ),
    { dispatch: false }
  );
}
