import { Injectable } from '@angular/core';
import { Producto } from './mc-donalds-list/Producto';
import { BehaviorSubject } from 'rxjs';

//*****Maneja la logica del carrito*****
@Injectable({        
  providedIn: 'root'
})

export class ProductCartService {
  
  private _cartList: Producto[] = [];
  cartList: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);  //BehaviorSubject sirve para encapsular una variable
 
  // total: BehaviorSubject<number> = new BehaviorSubject<number[]>([]);
  total: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }
  
  agregarCarrito(producto: Producto) {
    let item: Producto | undefined = this._cartList.find((v1) => v1.nombre == producto.nombre);  //busca si en la lista si hay alguna cerveza que tenga el mismo nombre
     
    if(!item && producto.dosENuno){
      this._cartList.push({... producto, cantidad: (producto.cantidad * 2)}); //hago un clone del producto en un nuevo objeto
    }else{
      if(!item){
        this._cartList.push({... producto});
      }else{
        if(producto.dosENuno){
          item.cantidad += producto.cantidad * 2;
        }else{
          item.cantidad += producto.cantidad;
        }
      }
      
    }
    // let item2={... producto}

    // if (producto.dosENuno)
    //   item2.cantidad = producto.cantidad * 2
    // if(!item){
    //   this._cartList.push({... item2});
    // }
    
    this.cartList.next(this._cartList); //notifica que hubo un cambio en mi variable privada
                                        //equivalente al emitt de eventos

    // if(producto.dosENuno){
    //   this.total.next(this.total.value + (producto.precio * producto.cantidad * 2));
    // }else{
    //   this.total.next(this.total.value + (producto.precio * producto.cantidad)); // Calcula el total cada vez que cambia el carrito
    // }

    this.total.next(this.total.value + (producto.precio * producto.cantidad)); // Calcula el total cada vez que cambia el carrito
  }

}
