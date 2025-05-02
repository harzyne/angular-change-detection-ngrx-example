import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCartFromLocalStorage, removeCartItem, updateCartItem } from '../../store/cart.actions';
import { selectCartItems, selectCartTotalPrice } from '../../store/cart.selectors';

@Component({
  selector: 'app-cart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems$: Observable<any>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadCartFromLocalStorage());
    this.cartItems$ = this.store.select(selectCartItems);
    this.totalPrice$ = this.store.select(selectCartTotalPrice);
  }

  removeItem(id: string) {
    this.store.dispatch(removeCartItem({ id }));
  }

  updateQuantity(id: string, quantity: number) {
    this.store.dispatch(updateCartItem({ id, quantity }));
  }
}
