import { Component, OnInit } from '@angular/core';
import { message } from '../../../shared/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  formValue: string;
  messages: message[] = [
    {
      user: 'Rabah',
      content: ' Salut Ali !',
      sentBy: 'bot',
      avatar: 'http://placehold.it/50/55C1E7/fff&text=U',
      date : '15 janvier 2018',
    },
    {
      user: 'Ali',
      content: ' Azul a Rabah !',
      sentBy: 'user',
      avatar: 'http://placehold.it/50/FA6F57/fff&text=ME',
      date : '14 janvier 2018',
    },
    {
      user: 'Ali',
      content: 'Saha Karim',
      sentBy: 'user',
      avatar: 'http://placehold.it/50/FA6F57/fff&text=ME',
      date : '14 janvier 2018',
    },
    {
      user: 'Ali',
      content: 'Je suis Ali Yaddaden le plus grand .',
      sentBy: 'bot',
      avatar: 'http://placehold.it/50/55C1E7/fff&text=U',
      date : '14 janvier 2018',
    },];
  constructor() { }

  ngOnInit() {
  
  }

  sendMessage(message: HTMLInputElement) {
    this.messages.push({
      user: 'Karim',
      content: message.value,
      sentBy: 'bot',
      avatar: 'http://placehold.it/50/55C1E7/fff&text=U',
      date : '14 janvier 2018',
    });
  }

}
