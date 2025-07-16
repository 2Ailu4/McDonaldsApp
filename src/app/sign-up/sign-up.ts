import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {

  formSignUp!: FormGroup;
  @Output() formularioValido = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void{
    this.formSignUp = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      })
    }, 
    {
      validators: [this.isMisMath] 
    });
  }


  isMisMath(control: AbstractControl): ValidationErrors | null {  //si no hay error devuelve null sino devuelve ValidationErrors
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

}
