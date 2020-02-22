import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router';
import { products } from '../products';
import { CartService} from '../cart.service';
import { AppDialogComponent } from './app-dialog/app-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

   color: string;

  openDialog(i): void {
    
    const dialogRef = this.dialog.open(AppDialogComponent, {
      width: '320px',
      data: { index: i }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
    
    
  }

  addToWishlist(i) {
let date = new Date();
products[i]["addDate"] = date.toLocaleString("en-US", this.options);
products[i]["nativeIndex"] = i;
this.cartService.wishItems.unshift(products[i]);


  }

options = {
  
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/