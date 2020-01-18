import { Component, OnInit } from '@angular/core';
import { CartService} from '../../cart.service';

@Component({
  selector: 'app-wishmenu',
  templateUrl: './wishmenu.component.html',
  styleUrls: ['./wishmenu.component.css']
})
export class WishmenuComponent implements OnInit {

  constructor(public service: CartService) { }

  ngOnInit() {

  }
wishItems = this.service.wishItems;

getShortList(list) {
return list.slice(0,5);
 ;
}

}
