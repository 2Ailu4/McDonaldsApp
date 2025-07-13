import { Component } from '@angular/core';
import { Producto } from './Producto';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';


@Component({
  selector: 'app-mc-donalds-list',
  standalone: false,
  templateUrl: './mc-donalds-list.html',
  styleUrl: './mc-donalds-list.scss'
})

export class McDonaldsList {
  
  productos: Producto[] = []; 
  
  constructor(private cartService: ProductCartService, 
              private dataService: ProductDataService) {
    
  }

                                                //el ngOnInit() se usa solo: - Para inicializar datos que dependen de servicios.
                                                //                        // - Para suscribirse a observables.
                                                //                        // - Para hacer llamadas HTTP.
                                                //                        // - Para preparar el estado inicial del componente. 
  ngOnInit(): void{
    this.dataService.productos$.subscribe(productos => { //si me suscribo luego tengo que desuscribirme --> al usar el async en el html la desuscripcion se hace sola
                                            this.productos = productos
                                          }); 

    this.dataService.refrescarLista();  //primera carga
  }

  maxAlcanzado(mensaje:string){
      alert(mensaje);     //podria aparecer un input que verifique si la persona es mayor de edad o si quiere comprar para mayorista por ej 
                          //en caso que sea menor de edad o quiera comprar para mayorista podria hacer que ya no pueda ver los productos 
  }

  agregarCarrito(producto:Producto):void{
    if(producto.cantidad != 0){
      this.cartService.agregarCarrito(producto);
    }
    if(producto.dosXuno){
      producto.stock -= producto.cantidad * 2;
    }else{
      producto.stock -= producto.cantidad;
    }
    producto.cantidad = 0;
  }
  
  
}




