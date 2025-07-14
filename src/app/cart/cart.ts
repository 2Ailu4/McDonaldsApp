import { Component, EventEmitter, Output } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Producto } from '../mc-donalds-list/Producto';
import { forkJoin, Observable, of, take } from 'rxjs';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})

export class Cart {
  cartList$!: Observable<Producto[]>;
  total$!: Observable<number>;
  
  // **********Ver si implemento el actualizar el mensaje del carrito cuando este vacio y cuando se confirme la compra*****************
  // @Output() estadoLista: EventEmitter<string> = new EventEmitter<string>
  // this.estadoLista.emit("Todavia no se agregaron productos al carrito");
  // this.estadoLista.emit("Gracias por su compra!!!");
  // ************************************************************************

  constructor(private cartService: ProductCartService,
              private dataService: ProductDataService){
    
    this.cartList$ = cartService.cartList.asObservable();
    this.total$ = cartService.total.asObservable();  
  }


// ------------------- PUT ---------------------
  // Al "confirmar compra" se debe resetear el carrito y descontar el stock de los productos comprados permanentemente en el servidor
  confirmarCompra() {
    if (confirm("¿Está seguro que desea confirmar su compra?")) {
      this.cartList$?.subscribe(productos => {
                                  const peticiones = productos.map(producto => {
                                      const productoActualizado = {...producto, stock: producto.stock - producto.cantidad};
                                      return this.dataService.putById(producto.id, productoActualizado);
                                  });
                                  forkJoin(peticiones).subscribe({  // forkJoin espera que todas las peticiones PUT terminen antes de seguir.
                                                        next: () => {
                                                          this.dataService.refrescarLista();  // Actualiza product-list.ts
                                                          this.cartService.vaciarCarrito();   // Vacía el carrito
                                                          
                                                          // ****************************************************************************************
                                                          // *******IDEA:::LLEVAR A LA PANTALLA DE INICIO Y ARROJAR MENSAJE DE "GRACIAS POR SU COMPRA"******
                                                          // ****************************************************************************************
                                                        },
                                                        error: err => console.error('Error al confirmar compra', err)
                                  });
      });
    }
  }


// ---------------------- Remover un producto del carrito -----------------------
  removerProducto(producto: Producto): void {
    this.cartList$.pipe(take(1)).subscribe(productos => {   //take(1) evita suscripciones infinitas y fugas de memoria.
                              const item = productos.find((productoCart) => productoCart.id == producto.id);
                              if(item){
                                this.cartService.removerDelCarrito(producto.id, (producto.precio * producto.cantidad));
                                this.dataService.aumentarStock(producto.id, producto.cantidad);
                              }
    
    });
  }
  


}

