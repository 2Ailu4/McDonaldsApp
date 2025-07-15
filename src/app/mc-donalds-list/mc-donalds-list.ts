import { Component } from '@angular/core';
import { Producto } from './Producto';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Observable } from 'rxjs';
                                            // -----------------------------------------
                                            //*****Lista de Productos de Mc Donlads*****
                                            // -----------------------------------------

@Component({
  selector: 'app-mc-donalds-list',
  standalone: false,
  templateUrl: './mc-donalds-list.html',
  styleUrl: './mc-donalds-list.scss'
})

export class McDonaldsList {
  dataList$!: Observable<Producto[]>;
   
  
  constructor(private cartService: ProductCartService, 
              private dataService: ProductDataService) {
    this.dataList$ = dataService.dataList.asObservable();
  }

                                                
  ngOnInit(): void{
      //el ngOnInit() se usa solo: - Para inicializar datos que dependen de servicios.
      //                        // - Para suscribirse a observables.
      //                        // - Para hacer llamadas HTTP.
      //                        // - Para preparar el estado inicial del componente. 
  }

  maxAlcanzado(mensaje:string){
      alert(mensaje);     //podria aparecer un input que verifique si la persona es mayor de edad o si quiere comprar para mayorista por ej 
                          //en caso que sea menor de edad o quiera comprar para mayorista podria hacer que ya no pueda ver los productos 
  }


  agregarCarrito(producto: Producto): void {
    if (producto.cantidad > 0) {
      this.dataService.descontarStock(producto);
      this.cartService.agregarCarrito(producto);
      producto.cantidad = 0;
    }
  }
  
  
}




