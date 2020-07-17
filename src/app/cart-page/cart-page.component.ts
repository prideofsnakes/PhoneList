import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  items;

  constructor(
    private cartService : CartService,
     private formBuilder: FormBuilder,
  ) { 

 this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      delAddress: ['', [Validators.required]],
      comment: '', 
    });
  }

   onSubmit(customerData) {
    

 /** Проверяем форму на валидность */ 
 if (this.checkoutForm.invalid) {
   alert("Заполните все поля, подсвеченные красным!");
   return;

 }
    console.warn('Your order has been submitted', customerData);
    this.orderItems = {};
    this.items.forEach((item, index, arr) => this.orderItems["Good #" + (index + 1)] = item);
    this.orderData = customerData;
    this.order = Object.assign(this.orderData,this.orderItems);
    this.cartService.postJSON(this.order).subscribe();
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    
  }
  
  clear() {
   this.items = this.cartService.clearCart();
  }

  itemDelete (i) {
    this.cartService.delElement(i);

  }


  checkoutForm : FormGroup;
  orderItems;
  orderData;
  order;
}