import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  messageForm: FormGroup;

  constructor(private messagesService: MessagesService) {
    this.messageForm = new FormGroup({
      message: new FormControl('', Validators.minLength(2)),
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    this.messagesService.pushNewMessage(this.messageForm.value.message);
    this.messageForm.reset();
  }
}