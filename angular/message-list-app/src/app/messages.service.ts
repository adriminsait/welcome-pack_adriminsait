import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class MessagesService {
  messageList: string[];

  constructor() {
    this.messageList = ['Hola!', 'Soy Pedro', 'Cómo estás?'];
  }

  getMessageList() {
    return this.messageList;
  }

  pushNewMessage(message: string) {
    this.messageList.push(message);
  }
}
