import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McDonaldsProducts } from './mc-donalds-products/mc-donalds-products';
import { McDonaldsContact } from './mc-donalds-contact/mc-donalds-contact';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: McDonaldsProducts
  },
  {
    path: 'contacto',
    component: McDonaldsContact
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
