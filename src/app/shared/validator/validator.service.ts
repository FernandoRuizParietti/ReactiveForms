import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

public nombreApellidoPattern  : string = "([a-zA-Z]+) ([a-zA-Z]+)"
public emailPattern           : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  //Metodo de validacion personalizado
  //regresar un null en una validacion, significa que esta todo ok
  //en cambio si regreso otra cosa, un obj por ej: significa que la validacion 
  //no pasa.

  noPuedeSerPapaCharly(control: FormControl): ValidationErrors | null{
    const valor: string = control.value?.trim().toLowerCase() //le quito los espacios antes y despues
    if(valor === 'papacharly'){
      return {
        noPapaCharly: true
      }
    }
    return null
  }

  camposIguales(campo1:string, campo2:string){

    return (formGroup: AbstractControl): ValidationErrors | null =>{
     
      const pass1 = formGroup.get(campo1)?.value
      const pass2 = formGroup.get(campo2)?.value

      if(pass1 !== pass2){
        formGroup.get(campo2)?.setErrors({noIguales: true})
        return {
          noIguales: true
        }
      }
      formGroup.get(campo2)?.setErrors(null)

      return null
    }
  }
}
