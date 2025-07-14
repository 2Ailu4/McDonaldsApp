import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Producto } from './mc-donalds-list/Producto';

const URL = 'https://68715ec876a5723aacd1c79a.mockapi.io/api/McDonalds-App/products';

@Injectable({
  providedIn: 'root'
})

export class ProductDataService {
 // ----------------------------------     ************ VERRRRR DE IMPLEMNTARLO ASI*************
 // private _dataList: Producto[] = [];
  //dataList: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);
  // ----------------------------------


  // descontarStock(producto: Producto) {
  //   let item = this.productosSubject.getValue().find((productoCart) => productoCart.id == producto.id); 
  //   if(item){
  //     if (item.dosXuno) {
  //       item.stock -= producto.cantidad * 2;
  //     } else {
  //       item.stock -= producto.cantidad;
  //     }

  //     item.cantidad = 0;
  //   }
  //   this.productosSubject.next(this.productosSubject.getValue());
  // }


 
  constructor(private http:HttpClient) { }

  public getAll(): Observable<Producto[]>{
    // return this.http.get<Producto[]>(URL);
    return this.http.get<Producto[]>(URL)
              .pipe(tap((producto: Producto[]) =>   //tap ejecuta efectos secundarios sin modificar los valores emitidos
                producto.forEach(producto => producto.cantidad = 0)));
  }

  public deleteById(id: string): Observable<any> {
    const deleteURL = `${URL}/${id}`;
    return this.http.delete(deleteURL);
  }

  public putById(id: number, producto: Producto): Observable<Producto>{
    const putURL = `${URL}/${id}`;
    return this.http.put<Producto>(putURL, producto);
  }

  
// -------------------------------- PUT -------------------------------------
// Cuando en cart.ts se realice un "confirmar cambios", se debe refrescar la lista y asi toda la app quedara sincronizada.
  private productosSubject = new BehaviorSubject<Producto[]>([]);
  public productos$ = this.productosSubject.asObservable();

  public refrescarLista(): void {
    this.getAll().subscribe(productos => {
                              this.productosSubject.next(productos);
                              // productos.forEach(p => console.log("IDDDD,,,,", p.id,"CANTIDAD.....", p.cantidad, "STOCK:::", p.stock));
                            });
  }

  // ---------------------- Remover del carrito -----------------------------
  public aumentarStock(id: number, cantidad: number): void {
    const productosActualizados = this.productosSubject.getValue().map(producto => {
                                                                        if (producto.id === id) {
                                                                          return { ...producto, stock: producto.stock + cantidad };
                                                                        }
                                                                        return producto;
                                  });
    this.productosSubject.next(productosActualizados);
  }




}
