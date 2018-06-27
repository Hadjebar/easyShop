import { SpeechRecognitionService } from './../../services/speech-recognition-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { message } from '../../../shared/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

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
    }];
  
  speechData: string;
  
  constructor(private speechRecognitionService: SpeechRecognitionService) {
    this.speechData = '';
  }

  ngOnInit() {
  
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeechSearchMovie(): void {

        this.speechRecognitionService.record()
            .subscribe(
            //listener
            (value) => {
                this.speechData = value;
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "no-speech") {
                    this.activateSpeechSearchMovie();
                }
            },
            //completion
            () => {
                this.activateSpeechSearchMovie();
            });
    }

  sendMessage() {
    this.messages.push({
      user: 'Karim',
      content: this.speechData,
      sentBy: 'bot',
      avatar: 'http://placehold.it/50/55C1E7/fff&text=U',
      date : '14 janvier 2018',
    });
    this.speechData = '';
  }

}
