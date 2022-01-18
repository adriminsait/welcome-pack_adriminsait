import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss']
})
export class FatherComponentComponent {
  // Se declara e inicia en el componente padre para luego comunicarlo al componente hijo
  inputText: string = '';
  // Variable donde almacenamos el valor del hijo
  sonMessage: string = '';

  // con cada tecla apretada se activa esta funcion.
  keyUp(letra: string) {
    this.inputText = letra;
  }
  // Recibe el mensaje del hijo  
  setMessage(message: string): void {
    this.sonMessage = message;
  }

}
