import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: "root"
})
export class CartService {

  constructor(
    private http : HttpClient
    ) { }

  addToCart(product, quantity) {

    let element = this.items.find((item) => item.id == product.id);
    let elementIndex = this.items.indexOf(element);
    if (elementIndex != -1) {
      this.items[elementIndex].factor+=quantity;
      
    }
    else {
    product.factor = quantity;
    this.items.push(product);
    
    }
  }

  clearCart() {
    this.items = [];
    
    return this.items;
  }

  getItems() {
    
    return this.items;
     
  }

  delElement(index) {
  this.items.splice(index,1);

  }

delElementWishlist (index) {

  this.wishItems.splice(index,1);
}

postJSON (json : Observable<Object>) {
  return this.http.post<Object>(this.serverURL, json, this.httpParams)
  .pipe(catchError(err => this.handleError(err)));
}

getJSON(): any  {

}

private handleError(err : HttpErrorResponse) {
  if (err.error instanceof ErrorEvent) {
    console.error('An error occured: ', err.error.message);
    console.error('With the status code: ', err.status);
  }

  else {
    console.error('Back returned code ${err.status}' + ' body was: ${err.error}')
  }

  return throwError("error! pizda bleat");

}

 httpParams = {headers : new HttpHeaders ({
  'Content-Type' : 'application/json'
})}

  items= [];
  wishItems = [];
  serverURL = 'http://127.0.0.1:8080/PhoneList/MyServlet/';
  public goods : Array<object>;
}