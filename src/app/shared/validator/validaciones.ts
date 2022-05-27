import { FormControl } from '@angular/forms';

export const nombreApellidoPattern  : string = "([a-zA-Z]+) ([a-zA-Z]+)"
export const emailPattern           : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

//EL metodo de validacion personalizado de abajo, 
//lo debo convertir en una fiuncion de flecha y exportarlo

export const noPuedeSerPapaCharly = (control: FormControl) => {
    const valor: string = control.value?.trim().toLowerCase() //le quito los espacios antes y despues
    if(valor === 'papacharly'){
      return {
        noPapaCharly: true
      }
    }
    return null
  }




//Metodo de validacion personalizado
  //regresar un null en una validacion, significa que esta todo ok
  //en cambio si regreso otra cosa, un obj por ej: significa que la validacion 
  //no pasa.

/*   noPuedeSerPapaCharly(control: FormControl){
    const valor: string = control.value?.trim().toLowerCase() //le quito los espacios antes y despues
    if(valor === 'papacharly'){
      return {
        noPapaCharly: true
      }
    }
    return null
  } */