import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { McDonaldsList } from './mc-donalds-list/mc-donalds-list';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { McDonaldsContact } from './mc-donalds-contact/mc-donalds-contact';
import { McDonaldsProducts } from './mc-donalds-products/mc-donalds-products';
import { Cart } from './cart/cart';
import { InputInteger } from './input-integer/input-integer';
import { HttpClientModule } from '@angular/common/http';
import { SignUp } from './sign-up/sign-up';

@NgModule({
  declarations: [
    App,
    McDonaldsList,
    McDonaldsContact,
    McDonaldsProducts,
    Cart,
    InputInteger,
    SignUp,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
