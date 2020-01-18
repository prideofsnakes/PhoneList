import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class CartService {

  constructor() { }

  addToCart(product, quantity) {
    product[this.cartItemIndex].factor = quantity;
    this.items.push(product[this.cartItemIndex]);
    
  }

  clearCart() {
    this.items = [];
    
    return this.items;
  }

  getItems() {
    
    return this.items;
     
  }

  delElement(index) {
  this.items.splice(index,1);

  }

delElementWishlist (index) {

  this.wishItems.splice(index,1);
}

  items= [];
  wishItems = [];
  cartItemIndex = 0;
}