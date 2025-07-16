import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Producto } from './mc-donalds-list/Producto';

                        // ------------------------------------------------------------------
                        // *****Maneja la comunicacion con el servidor y Maneja la lista*****
                        // ------------------------------------------------------------------

const URL = 'https://68715ec876a5723aacd1c79a.mockapi.io/api/McDonalds-App/products';

@Injectable({
  providedIn: 'root'
})


export class ProductDataService {
  private _dataList: Producto[] = [];
  dataList: BehaviorSubject<Producto[]> = new BehaviorSubject(this._dataList);

  constructor(private http:HttpClient) {
    this.refrescarLista(); 
  }

  public getAll(): Observable<Producto[]>{
    return this.http.get<Producto[]>(URL) 
              .pipe(tap((producto: Producto[]) =>   //tap ejecuta efectos secundarios sin modificar los valores emitidos
                producto.forEach(producto => producto.cantidad = 0)));
  }

  // public deleteById(id: string): Observable<any> {
  //   const deleteURL = `${URL}/${id}`;
  //   return this.http.delete(deleteURL);
  // }

  public putById(id: number, producto: Producto): Observable<Producto>{
    const putURL = `${URL}/${id}`;
    return this.http.put<Producto>(putURL, producto);
  }


// -----------------------Agregar al carrito---------------------------------
// Al agregar al carrito un producto se debe descontar el stock del producto en la lista
  descontarStock(producto: Producto) {
    let item = this._dataList.find((productoCart) => productoCart.id == producto.id); 
    if(item){
      if (item.dosXuno) {
        item.stock -= producto.cantidad * 2;
      } else {
        item.stock -= producto.cantidad;
      }
    }
    this.dataList.next(this._dataList);
  }

  
// -------------------------------- PUT -------------------------------------
// Cuando en cart.ts se realice un "confirmar cambios", se debe refrescar la lista y asi toda la app quedara sincronizada.
  public refrescarLista(): void {
    this.getAll().subscribe(productos => {
                              this._dataList = productos;
                              this.dataList.next(this._dataList);
                            });
  }
// 

  // ---------------------- Remover del carrito -----------------------------
  // Al quitar un producto del carrito porque ya no se lo quiere comprar se debe volver el stock del producto de la lista 
  // al valor que tenia antes de elegir comprarlo
  public aumentarStock(id: number, cantidad: number): void {
    this._dataList = this._dataList.map(producto => {
      if (producto.id === id) {
        return { ...producto, stock: producto.stock + cantidad}; 
      }
      return producto;
    });

    this.dataList.next(this._dataList); 
  }


}
