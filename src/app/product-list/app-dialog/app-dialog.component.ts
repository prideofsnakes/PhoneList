import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.css']
})
export class AppDialogComponent implements OnInit {


good = this.data.good;
indToDel = this.data.index;
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



  addToCart(good, quantity) {
   
    this.service.addToCart(good, quantity);
    this.service.delElementWishlist(this.indToDel);
     this.dialogRef.close();
  }

quantity = 1;
}
