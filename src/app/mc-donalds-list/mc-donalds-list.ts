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

  increaseCantidad(producto: Producto):void{
    if(producto.cantidad < producto.stock)
      producto.cantidad++;
  }

  decreaseCantidad(producto: Producto):void{
    if(producto.cantidad > 0)
      producto.cantidad--;
  }

  validarCantidad(event: any, producto: Producto): void {
    const input = event.target;
    let valor = input.value;

    valor = valor.replace(/\D/g, ''); // Quitá todos los caracteres que no sean números de la variable valor
                        // \D → cualquier carácter que no sea un número
                        // g → indica que debe hacerlo de forma global, es decir, en todas las apariciones

    let cantidad = parseInt(valor, 10); // Convertir a número

    if (isNaN(cantidad)) { // Si no es un número válido, lo seteo a cero
      producto.cantidad = 0;
      return;
    }

    if (cantidad > producto.stock) { // Si supera el stock disponible le permito comprar hasta ese valor nomas
      cantidad = producto.stock;
    }

    producto.cantidad = cantidad; // Actualizo el modelo 
    input.value = cantidad; // Actualizo el input visual
  }


  
}




