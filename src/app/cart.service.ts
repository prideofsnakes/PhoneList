import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class CartService {

  constructor() { }

  addToCart(product, quantity, index) {
    let elementInCart = this.items.indexOf(product[index]);
    if (elementInCart != -1) this.items[elementInCart].factor+=quantity;
    else {
    product[index].factor = quantity;
    this.items.push(product[index]);
    }
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
  
}