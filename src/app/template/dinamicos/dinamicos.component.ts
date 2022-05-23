import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = ''

  /* Objeto inicializador del form */

  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      {
        id:1,
        nombre: 'Metal Gear'
      },{
        id:2,
        nombre: 'Death Stranding'
      }
    ]

  }

  @ViewChild('miFormulario') miFormulario!: NgForm


  nombreValido(): any{
    return this.miFormulario?.controls.nombre?.errors 
  }

  guardar(){
    console.log('formulario posteado');
    
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1) //indice de elemento a elimiar y cantidad de elementos a eliminar
  }

  agregarJuego(){
    const juegoFav: Favorito ={
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...juegoFav})
    this.nuevoJuego = ''
  }

}
