import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';


import { CartService } from './cart.service';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDialogComponent } from './product-list/app-dialog/app-dialog.component';
import { AngularMaterialModule} from './angular-material.module';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishmenuComponent } from './top-bar/wishmenu/wishmenu.component';




@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'cart', component: CartPageComponent }
    ]),
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule

  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    
    
    CartPageComponent,
    
    AppDialogComponent,
    
    WishlistComponent,
    
    WishmenuComponent,
    
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppDialogComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/