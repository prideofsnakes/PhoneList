import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';
import { WishmenuComponent } from './wishmenu/wishmenu.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private service: CartService) { }

  ngOnInit() {
  }

  getLength() {
  	return this.service.items.reduce((sum, item) => sum+item.factor, 0);
  }

  getSumPrices() {
  	let sum = this.service.items.reduce((sum, item) => sum+item.price*item.factor, 0);
  	
  	return sum;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/