import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator,ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }
  validate( control: AbstractControl):Observable<ValidationErrors | null> {

          const email = control.value
          console.log(email);

          //el backend siempre me regresa algo, si el correo ya existe en la db
          //entonces esa dir, ya esta siendo usada, si el back me devuelve
          //un arreglo vacio, entonces esa dir se puede usar

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
    .pipe(
      //delay(3000),
      map(resp=> {
        return (resp.length === 0)
                  ? null 
                  : {emailTomado: true}
      })
    )
  }
}
