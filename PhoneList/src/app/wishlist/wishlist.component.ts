import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../products';

import { AppDialogComponent } from '../product-list/app-dialog/app-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(public service: CartService
    ) { }

  wishList = this.service.wishItems;

  ngOnInit() {
  }

  itemDelete(i) {

  	this.service.delElementWishlist(i);
  }

  

    
}
