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
 
  total: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor() { }
  
  agregarCarrito(producto: Producto) { 
    // if (producto.cantidad > 0){
      let item: Producto | undefined = this._cartList.find((productoCart) => productoCart.id == producto.id);  //busca si en la lista si hay alguna cerveza que tenga el mismo nombre
     
      if(!item && producto.dosXuno){
        this._cartList.push({... producto, cantidad: (producto.cantidad * 2)}); //hago un clone del producto en un nuevo objeto
      }else{
        if(!item){
          this._cartList.push({... producto});
        }else{
          if(producto.dosXuno){
            item.cantidad += producto.cantidad * 2;
          }else{
            item.cantidad += producto.cantidad;
          }
        }
      }
      // Al modificar item.cantidad, también estoy modificando el objeto dentro de _cartList(item apunta al mismo objeto dentro de _cartList).
      
      this.cartList.next(this._cartList); //notifica que hubo un cambio en mi variable privada
                                          //equivalente al emitt de eventos

      this.total.next(this.total.value + (producto.precio * producto.cantidad)); // Calcula el total cada vez que cambia el carrito
    
    // }
    
  }


  vaciarCarrito() {
    this._cartList = [];
    this.cartList.next(this._cartList);
    this.total.next(0); //al vaciar el carrito el total debe volver a 0
  }

  removerDelCarrito(id: number, descontar: number):void{
    this._cartList = this._cartList.filter(producto => producto.id !== id); // filter crea un nuevo arreglo sin el producto que contenga al id especificado
    this.cartList.next(this._cartList);
    this.total.next(this.total.value - descontar);
  }
  

}
