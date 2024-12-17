import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
CartService

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.cartService.getProductById(id);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
