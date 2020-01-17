import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CartService } from '../../cart.service';
import { products } from '../../products';

@Component({
  selector: 'app-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.css']
})
export class AppDialogComponent implements OnInit {
product = products;
index = this.service.cartItemIndex;
  constructor(
    public dialogRef: MatDialogRef<AppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CartService,
    private service: CartService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
    
  }

  ngOnInit() {
  }


  addToCart(product, quantity) {
    this.service.addToCart(product, quantity);
     this.dialogRef.close();
  }

quantity = 1;
}
