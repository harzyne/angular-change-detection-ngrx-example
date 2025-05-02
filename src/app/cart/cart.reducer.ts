import { createReducer, on } from '@ngrx/store';
import { addCartItem, removeCartItem, updateCartItem } from './cart.actions';

export interface CartState {
  items: any[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addCartItem, (state, { item }) => ({ ...state, items: [...state.items, item] })),
  on(removeCartItem, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id),
  })),
  on(updateCartItem, (state, { id, quantity }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === id ? { ...item, quantity } : item
    ),
  }))
);
