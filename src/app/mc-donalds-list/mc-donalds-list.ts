import { Component } from '@angular/core';
import { Producto } from './Producto';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Observable } from 'rxjs';
import { FormStatusService } from '../form-status.service';
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
  formularioValido: boolean = false;
  
  constructor(private cartService: ProductCartService, 
              private dataService: ProductDataService,
              private formStatusService: FormStatusService) {
    this.dataList$ = dataService.dataList.asObservable();
  }

  ngOnInit(): void{
      //el ngOnInit() se usa solo: - Para inicializar datos que dependen de servicios.
      //                        // - Para suscribirse a observables.
      //                        // - Para hacer llamadas HTTP.
      //                        // - Para preparar el estado inicial del componente. 
      this.formStatusService.formularioValido$.subscribe(valido => {
              this.formularioValido = valido;
            });
    }

  maxAlcanzado(mensaje:string){ 
      alert(mensaje);                    
  }


  agregarCarrito(producto: Producto): void { 
    if (producto.cantidad > 0) {
      this.cartService.agregarCarrito(producto);
      this.dataService.descontarStock(producto);
      producto.cantidad = 0;
    }
  }
  
}




