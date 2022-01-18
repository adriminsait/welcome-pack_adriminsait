import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son-component',
  templateUrl: './son-component.component.html',
  styleUrls: ['./son-component.component.scss']
})
export class SonComponentComponent{
  // Recibe inputText desde la template del padre
  @Input() inputText!: string;

  @Output() emitMessage = new EventEmitter<string>();

  message: string = '';

  sendMessage() {
    this.emitMessage.emit(this.message);
  }
}