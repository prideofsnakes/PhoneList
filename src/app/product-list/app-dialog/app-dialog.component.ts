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

index = this.data.index;
  constructor(
    public dialogRef: MatDialogRef<AppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: CartService) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
   
  }

  ngOnInit() {
  }



  addToCart(product, quantity, index) {
   
    this.service.addToCart(product, quantity, index);
     this.dialogRef.close();
  }

quantity = 1;
}
