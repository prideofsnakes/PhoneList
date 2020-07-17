import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';

import { CartService} from '../cart.service';
import { AppDialogComponent } from './app-dialog/app-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   goods;
   
  constructor(
    private route: ActivatedRoute,
    public cartService: CartService,
    public dialog: MatDialog,
    public http : HttpClient) { }

  ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //   this.product = products[+params.get('productId')];
  // });
     this.http.get('http://127.0.0.1:8080/PhoneList/MyServlet/').subscribe(answer => {
    
    this.goods = answer["goods"];
    this.cartService.goods = this.goods;    
    
  });
  }

  openDialog(good): void {
    
      const dialogRef = this.dialog.open(AppDialogComponent, {
      width: '320px',
      data: { good: good }
    });

    dialogRef.afterClosed().subscribe(res => {});
    
    
  }

  addToWishlist(good) {
let element = this.cartService.wishItems.find((item) => item.id == good.id);
let elementIndex = this.cartService.wishItems.indexOf(element);
if (elementIndex == -1) {    
let date = new Date();
good["addDate"] = date;
this.cartService.wishItems.unshift(good);

  }
  else {
    alert("The good is already on wishList!");    
  }
}

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/