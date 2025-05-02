import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCartFromLocalStorage, updateCartItem, removeCartItem } from '../../store/cart.actions';
import { selectCartItems, selectCartTotalPrice } from '../../store/cart.selectors';

@Component({
  selector: 'app-cart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,  // Use OnPush change detection
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnChanges {
  cartItems$: Observable<any>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadCartFromLocalStorage());
    this.cartItems$ = this.store.select(selectCartItems);
    this.totalPrice$ = this.store.select(selectCartTotalPrice);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Change detection triggered:', changes);
  }

  removeItem(id: string) {
    this.store.dispatch(removeCartItem({ id }));
  }

  updateQuantity(id: string, quantity: number) {
    this.store.dispatch(updateCartItem({ id, quantity }));
  }
}
