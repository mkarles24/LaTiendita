import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.css']
})
export class RegisterTemplateComponent implements OnInit {

  constructor(private formBuild: FormBuilder) { }

  public formRegister!: FormGroup;

  ngOnInit(): void {
    this.formRegister = this.formBuild.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      preferencias: this.formBuild.array([
        this.formBuild.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
      ])

    })
  }

  // SE UTILIZA ESTA VARIABLE VISUALIZAR O NO LA CONTRASEÑA ( CONVERTIRLA EN TIPO TEXT)
  hidePassword = true;

  // SE OBTIENE EL ARRAY DEL FORMULARIO
  get preferencias() {
    return this.formRegister.get('preferencias') as FormArray
  }

  // SE CREA UN NUEVO FORM CONTROL PARA EL ARRAY DE PREFERENCIAS
  agregarPreferencia() {
    this.preferencias.push(this.formBuild.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]));
  }

  // SE ELIMINA UN FORM CONTROL DEL ARRAY DE PREFERENCIAS
  removerPrefencia(index : any) {
    this.preferencias.removeAt(index)
  }

  // FUNCION PROVICIONAL PARA ENVIAR LOS DATOS
  enviarDatos(): any {
    console.log(this.formRegister.value)
  }

  // FUNCIONES PARA VALIDAR EL ESTADO DE LOS INPUTS DEL FORMULARIO

  // EL INPUT FUE TOCADO Y NO CUMPLE CON LOS VALIDATORS  
  fieldIsInvalid(inputForm: string) {
    return this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.invalid;
  }

  // EL INPUT FUE TOCADO Y CUMPLE CON LOS VALIDATORS
  fieldIsValid(inputForm: string) {
    return this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.valid;
  }


  // MENSAJES DE ERRORES
  // EL INPUT FUE TOCADO PERO NO SE INGRESÓ INGRESÓ NINGÚN DATO
  getMessageRequired(inputForm: string) {
    if (this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.errors?.['required']) {
      return 'El campo es obligatorio';
    }

    return this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.errors?.['required'] ? 'El campo es obligatorio.' : '';
  }

  // EL INPUT FUE TOCADO Y NO SE INGRESÓ LA CANTIDAD DE CARACTERES NECESARIOS
  getMessageMinLength(inputForm: string) {
    if (this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.invalid && this.formRegister.get(inputForm)?.errors?.['minlength']) {
      return 'El minimo de caracteres permitidos es ';
    }
    
    return this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.invalid && this.formRegister.get(inputForm)?.errors?.['minlength'] ? 'No se ingresó la cantidad de caracteres requeridos.' : '';
  }

  // EL INPUT FUE TOCADO Y SE INGRESÓ MÁS DE LA CANTIDAD DE CARACTERES NECESARIOS
  getMessageMaxLength(inputForm: string) {
    if (this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.invalid && this.formRegister.get(inputForm)?.errors?.['maxlength']) {
      return 'El máximo de caracteres permitidos es ';
    }
    
    return this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.invalid && this.formRegister.get(inputForm)?.errors?.['maxlength'] ? 'Se ingresó más de la cantidad de caracteres permitidos.' : '';
  }
  
  // EL INPUT FUE TOCADO Y NO SE INGRESÓ EL FORMATO DE CORREO REQUERIDO
  getMessageErrorEmail(inputForm: string) {
    if (this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.invalid && this.formRegister.get(inputForm)?.errors?.['pattern']) {
      return 'Formato de correo no válido';
    }
    
    return this.formRegister.get(inputForm)?.touched && this.formRegister.get(inputForm)?.invalid && this.formRegister.get(inputForm)?.errors?.['pattern'] ? 'Se ingresó más de la cantidad de caracteres permitidos.' : '';
  }



}
