import { message } from './../../shared/models/message';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: message[] = [];
  private url='http://192.168.0.98:5000';
  constructor( private http: Http ) { }

  add(msg: message){
    
    this.messages.push(msg)
    
    this.http.post(this.url, msg)
          .subscribe( response => {
            console.log(response)
          }, (error:Response) => {
            if(error.status === 404)
              alert('404 error');
            console.log(error);
          });
  }

  deleteAllmessages(){
    this.messages = [];
  }
}
