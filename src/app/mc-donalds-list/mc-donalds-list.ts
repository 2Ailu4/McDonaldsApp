import { Component } from '@angular/core';
import { Producto } from './Producto';


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
      oferta: true,
      cantidad: 0,

    },
    {
      img: "assets/img/CuartoDeLibraConQueso.png",
      nombre: "Cuarto de Libra con Queso",
      tipo: "Hamburguesa",  
      precio: 6300,
      unidades: 1,
      stock: 5,
      oferta: false,
      cantidad: 0,
    },
    {
      img: "assets/img/McFiesta.png",
      nombre: "Mc Fiesta",
      tipo: "Hamburguesa",
      precio: 2900,
      unidades: 1,
      stock: 0,
      oferta: false,
      cantidad: 0,
    },
    {
      img: "assets/img/McChicken.png",
      nombre: "Mc Chicken",
      tipo: "Pollo",
      precio: 1700,
      unidades: 1,
      stock: 12,
      oferta: true,
      cantidad: 0,
    },
    {
      img: "assets/img/McNuggets.png",
      nombre: "Mc Nuggets",
      tipo: "Pollo",
      precio: 1900,
      unidades: 6,
      stock: 7,
      oferta: false,
      cantidad: 0,
    },
    {
      img: "assets/img/PapasFritasMedianas.png",
      nombre: "Papas Fritas Medianas",
      tipo: "Acompañamiento",
      precio: 180,
      unidades: 1,
      stock: 31,
      oferta: false,
      cantidad: 0,
    },
    {
      img: "assets/img/EnsaladaCesar.png",
      nombre: "Ensalada Cesar",
      tipo: "Acompañamiento",
      precio: 6990,
      unidades: 1,
      stock: 0,
      oferta: true,
      cantidad: 0,
    },
    {
      img: "assets/img/Cajitafeliz.png",
      nombre: "Cajita Feliz",
      tipo: "Combo",
      precio: 350,
      unidades: 1,
      stock: 19,
      oferta: true,
      cantidad: 0,
    },
  ]

  constructor() {}

  maxAlcanzado(mensaje:string){
      alert(mensaje);     //podria aparecer un input que verifique si la persona es mayor de edad o si quiere comprar para mayorista por ej 
                          //en caso que sea menor de edad o quiera comprar para mayorista podria hacer que ya no pueda ver los productos 
  }

  
  
}




