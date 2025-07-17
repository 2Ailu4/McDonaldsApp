import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { FormStatusService } from '../form-status.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {

  formSignUp!: FormGroup;
  @Output() formularioValido = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder,
              private formStatusService: FormStatusService
  ) {}

  ngOnInit(): void{
    this.formSignUp = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100), Validators.pattern('^[0-9]+$')]],
      
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      })
    }, 
    {
      validators: [this.passwordMismatchValidator] 
    });

    this.formSignUp.statusChanges.subscribe(status => { //formSignUp.statusChanges emite un nuevo valor cada vez que cambia el estado de validez del formulario
        this.formStatusService.setFormularioValido(this.formSignUp.valid);
      });
  }


  passwordMismatchValidator(control: AbstractControl): ValidationErrors | null {  //si no hay error devuelve null sino devuelve ValidationErrors
    return control.get('password')?.value !== control.get('confirmPassword')?.value
      ? {passwordMisMath: true} 
      : null; //else
  }

  validarFormulario(){
    if (this.formSignUp.valid) {
      this.formularioValido.emit(true);  
    } else {
      this.formularioValido.emit(false);
    }
  }

  soloEnteros(event: KeyboardEvent) {
    const char = event.key;
    if (!/^[0-9]$/.test(char)) {
      event.preventDefault();
    }
  }

}
