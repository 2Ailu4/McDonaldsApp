import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})

export class FormStatusService {
  
  private formularioValidoSubject = new BehaviorSubject<boolean>(false);
  formularioValido$ = this.formularioValidoSubject.asObservable();

  setFormularioValido(valido: boolean) {
    this.formularioValidoSubject.next(valido);
  }
}

