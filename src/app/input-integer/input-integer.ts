import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../mc-donalds-list/Producto';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})

export class InputInteger {
  @Input() cantidad!: number; // @Input: “Este valor va a ser asignado externamente (por Angular) 
                                // antes de que lo use, así que no me tires error por no inicializarlo 
                                // yo mismo”.
  @Input() max!: number;

  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>

  @Output() maxAlcanzado: EventEmitter<string> = new EventEmitter<string>

  increaseCantidad():void{
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }else{
      if(this.max == 0){
        this.maxAlcanzado.emit("Por el momento no hay stock de este producto");
      }else{
        this.maxAlcanzado.emit("Se alcanzo el max");
      }
    }
  }

  decreaseCantidad():void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  validarCantidad(event: any): void {
    const input = event.target;
    let valor = input.value;
    valor = valor.replace(/\D/g, ''); // Quitá todos los caracteres que no sean números de la variable valor
                          // \D → cualquier carácter que no sea un número
                          // g → indica que debe hacerlo de forma global, es decir, en todas las apariciones
   
    if (valor === '') {
      this.cantidad = 0;
      input.value = '';
      return;
    }

    let cantidad = parseInt(valor, 10); // Convertir a número
    
    if (cantidad > this.max) {  // Si supera el stock disponible le permito comprar hasta ese valor nomas
      cantidad = this.max;
    }

    this.cantidad = cantidad; // Actualizo el modelo
    input.value = cantidad.toString();  // Actualizo el input visual
    this.cantidadChange.emit(this.cantidad);
  }

}
