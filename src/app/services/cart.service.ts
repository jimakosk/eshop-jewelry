import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products = [
    { id: 1, name: 'Diamond Ring', description: 'Sparkling diamond ring', price: 1200, image: 'assets/diamond-ring.jpg' },
    { id: 2, name: 'Gold Necklace', description: 'Exquisite gold necklace', price: 950, image: 'assets/gold-necklace.jpg' },
    { id: 3, name: 'Silver Bracelet', description: 'Elegant silver bracelet', price: 350, image: 'assets/silver-bracelet.jpg' },
  ];

  private cart: any[] = [];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    this.cart.push(product);
  }

  removeFromCart(product: any) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
  constructor() { }

}
