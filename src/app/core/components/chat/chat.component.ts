import { message } from './../../../shared/models/message';
import { ChatService } from './../../services/chat.service';
import { SpeechRecognitionService } from './../../services/speech-recognition-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  formValue: string;


  messages: message[] = [
    {
      user: 'User11', 
      content: ' Salut!',
      sentBy: 'bot',
      avatar: 'http://placehold.it/50/55C1E7/fff&text=U11',
      date : '28 juin 2018',
    },
    {
      user: 'EasyShop',
      content: ' Salut cv !',
      sentBy: 'user',
      avatar: 'http://placehold.it/50/FA6F57/fff&text=ES',
      date : '28 juin 2018',
    },
    {
      user: 'User11',
      content: 'Je veux acheter des chaussures Nike noirs',
      sentBy: 'bot',
      avatar: 'http://placehold.it/50/55C1E7/fff&text=U11',
      date : '28 juin 2018',
    },
    {
      user: 'EasyShop',
      content: 'Voici les résultats de votre requête ',
      sentBy: 'user',
      tab: [
        {
          title: 'Nike 500',
          lien: 'assets/images/prod/shoes/sneakers.jpg',
          prix: 5000,
          adresse: 'Alger centre'
        },
        {
          title: 'Nike 300',
          lien: 'assets/images/prod/shoes/airmax_black.jpg',
          prix: 6000,
          adresse: 'Alger Ouest'
        },
        {
          title: 'Nike 200',
          lien: 'assets/images/prod/shoes/puma.jpg',
          prix: 4000,
          adresse: 'Alger Est'
        }
      ],
      avatar: 'http://placehold.it/50/FA6F57/fff&text=ES',
      date : '14 janvier 2018',
    },
    { 
      user: 'User11',
      content: 'Merci !!!!!!',
      sentBy: 'bot',
      avatar: 'http://placehold.it/50/55C1E7/fff&text=U11',
      date : '28 juin 2018',
    }];
  
  speechData: string;
  public loading = false;
  public showSearchBtn = true;
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };

  constructor(
    private speechRecognitionService: SpeechRecognitionService,
    private chat: ChatService)  {
    this.speechData = '';
    this.showSearchBtn = true;
  }

  ngOnInit() {
  
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeechSearchMovie(): void {
    this.loading = true;
    this.showSearchBtn = false;
    this.speechRecognitionService.record()
      .subscribe(
      //listener
        (value) => {
          this.loading = false;
          this.speechData = value;
          this.sendMessage();
        },
        //errror
        (err) => {
          this.loading = false;
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
    let message: message = {
      user: 'User11',
      content: this.speechData,
      sentBy: 'bot',
      avatar: 'http://placehold.it/50/55C1E7/fff&text=U11',
      date : '28 juin 2018',
    };
    this.useSpeechSynthesis();
    this.chat.add(message);
    this.messages.push(message);
    this.speechData = '';
  }

  disableSpeechRecognition():void{
    this.showSearchBtn = true;
    this.speechData = '';
    this.speechRecognitionService.SpeechEnd();
  }

  useSpeechSynthesis(): void{
    //const speechSynthesis :SpeechSynthesis = new SpeechSynthesis();
    const utterThis: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();
    utterThis.pitch = 1;
    utterThis.rate = 1;
    utterThis.volume = 1;
    utterThis.lang = 'fr-fr';
    utterThis.text = 'bonjour';
    
    
    window.speechSynthesis.speak(utterThis);
  }
}
