import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


import { AppDialogComponent } from '../product-list/app-dialog/app-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(public service: CartService,
    public dialog: MatDialog
    ) { }

  wishList = this.service.wishItems;

  ngOnInit() {
  }

  itemDelete(i) {

  	this.service.delElementWishlist(i);
  }

  openDialog(good, i): void {
       const dialogRef = this.dialog.open(AppDialogComponent, {
      width: '320px',
      data: { good: good,
              index: i }
    });

    dialogRef.afterClosed().subscribe(res => {});
    
    
  }

    
}
