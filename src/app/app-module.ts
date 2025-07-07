import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { McDonaldsList } from './mc-donalds-list/mc-donalds-list';

import {FormsModule} from '@angular/forms';
import { McDonaldsContact } from './mc-donalds-contact/mc-donalds-contact';
import { McDonaldsProducts } from './mc-donalds-products/mc-donalds-products';
import { Cart } from './cart/cart';

@NgModule({
  declarations: [
    App,
    McDonaldsList,
    McDonaldsContact,
    McDonaldsProducts,
    Cart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
