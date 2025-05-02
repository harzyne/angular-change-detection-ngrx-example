import { createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = (state: any) => state.cart;

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (items: any[]) => items.reduce((total, item) => total + item.quantity * item.price, 0)
);
