import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart = this.cartService.getCart();

  constructor(private cartService: CartService) {}

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }
}
