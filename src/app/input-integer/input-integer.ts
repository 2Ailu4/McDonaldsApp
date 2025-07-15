import { Component, EventEmitter, Input, Output } from '@angular/core';
                      // -------------------------------------------------------------------------------------
                      //*****Input para especificar la cantidad de unidades que se quieren de un prodcuto*****
                      // -------------------------------------------------------------------------------------
@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})

export class InputInteger {
  @Input() cantidad!: number;  // [cantidad]: producto.cantidad;  el padre le pasa por parametro la variable (por copia)

  @Input() max!: number;

  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number> // el hijo de devuelve la variable modificada para 
  //que el padre le pueda actualizar el valor (cantidad) = this.cantidadChange.emit(this.cantidad)

  @Output() maxAlcanzado: EventEmitter<string> = new EventEmitter<string>

  incrCantidad():void{
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

  decrCantidad():void{
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
