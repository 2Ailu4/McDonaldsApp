import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from './mc-donalds-list/Producto';

const URL = 'https://68715ec876a5723aacd1c79a.mockapi.io/api/McDonalds-App/products';

@Injectable({
  providedIn: 'root'
})

export class ProductDataService {

  constructor(private http:HttpClient) { }

  public getAll(): Observable<Producto[]>{
    return this.http.get<Producto[]>(URL);
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
                            });
  }

}
