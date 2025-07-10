import { Component } from '@angular/core';
import { Producto } from './Producto';
import { ProductCartService } from '../product-cart-service';


@Component({
  selector: 'app-mc-donalds-list',
  standalone: false,
  templateUrl: './mc-donalds-list.html',
  styleUrl: './mc-donalds-list.scss'
})

export class McDonaldsList {
  
  productos: Producto[] = [
    {
      img: "assets/img/BigMac.png",
      nombre: "Big Mac",
      tipo: "Hamburguesa",  
      precio: 7300 ,
      unidades: 1,
      stock: 20,
      descuento: true,
      cantidad: 0,
      dosENuno: false,
    },
    {
      img: "assets/img/CuartoDeLibraConQueso.png",
      nombre: "Cuarto de Libra con Queso",
      tipo: "Hamburguesa",  
      precio: 6300,
      unidades: 1,
      stock: 5,
      descuento: false,
      cantidad: 0,
      dosENuno: false,
    },
    {
      img: "assets/img/McFiesta.png",
      nombre: "Mc Fiesta",
      tipo: "Hamburguesa",
      precio: 2900,
      unidades: 1,
      stock: 0,
      descuento: false,
      cantidad: 0,
      dosENuno: true,
    },
    {
      img: "assets/img/McChicken.png",
      nombre: "Mc Chicken",
      tipo: "Pollo",
      precio: 1700,
      unidades: 1,
      stock: 12,
      descuento: true,
      cantidad: 0,
      dosENuno: false,
    },
    {
      img: "assets/img/McNuggets.png",
      nombre: "Mc Nuggets",
      tipo: "Pollo",
      precio: 1900,
      unidades: 6,
      stock: 7,
      descuento: false,
      cantidad: 0,
      dosENuno: false,
    },
    {
      img: "assets/img/PapasFritasMedianas.png",
      nombre: "Papas Fritas Medianas",
      tipo: "Acompañamiento",
      precio: 180,
      unidades: 1,
      stock: 31,
      descuento: false,
      cantidad: 0,
      dosENuno: true,
    },
    {
      img: "assets/img/EnsaladaCesar.png",
      nombre: "Ensalada Cesar",
      tipo: "Acompañamiento",
      precio: 6990,
      unidades: 1,
      stock: 0,
      descuento: false,
      cantidad: 0,
      dosENuno: false,
    },
    {
      img: "assets/img/Cajitafeliz.png",
      nombre: "Cajita Feliz",
      tipo: "Combo",
      precio: 350,
      unidades: 1,
      stock: 19,
      descuento: false,
      cantidad: 0,
      dosENuno: false,
    },
  ]
  
  constructor(private cart: ProductCartService) {
    
  }

  maxAlcanzado(mensaje:string){
      alert(mensaje);     //podria aparecer un input que verifique si la persona es mayor de edad o si quiere comprar para mayorista por ej 
                          //en caso que sea menor de edad o quiera comprar para mayorista podria hacer que ya no pueda ver los productos 
  }

  agregarCarrito(producto:Producto):void{
    if(producto.cantidad != 0){
      this.cart.agregarCarrito(producto);
    }
    if(producto.dosENuno){
      producto.stock -= producto.cantidad * 2;
    }else{
      producto.stock -= producto.cantidad;
    }
    producto.cantidad = 0;
  }
  
  
}




