import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart-service';
import { Producto } from '../mc-donalds-list/Producto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})

export class Cart {
  cartList$: Observable<Producto[]> | undefined;
  total$: Observable<number> | undefined;
  
  constructor(private cart: ProductCartService){
    this.cartList$ = cart.cartList.asObservable();

    this.total$ = cart.total.asObservable();  
  }

  confirmarCompra(){
    if(confirm("Esta seguro que desea confirmar?")){
      //Reiniciar carrito y arrojar mensaje de compra realizada
    }else{
      //nada??
    }
  }


}

// cart.cartList.subscribe((observable) => this.cartList = observable);