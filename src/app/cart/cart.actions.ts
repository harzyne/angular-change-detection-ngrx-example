import { createAction, props } from '@ngrx/store';

export const loadCartFromLocalStorage = createAction('[Cart] Load from LocalStorage');
export const addCartItem = createAction('[Cart] Add Item', props<{ item: any }>());
export const removeCartItem = createAction('[Cart] Remove Item', props<{ id: string }>());
export const updateCartItem = createAction('[Cart] Update Item', props<{ id: string, quantity: number }>());
