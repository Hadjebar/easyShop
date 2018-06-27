import { Component, OnInit, Input } from '@angular/core';
import { message } from '../../models/message';

@Component({
  selector: 'app-content-message',
  templateUrl: './content-message.component.html',
  styleUrls: ['./content-message.component.scss']
})
export class ContentMessageComponent implements OnInit {
  @Input('message') mes: message;
  
  constructor() { }

  ngOnInit() {
  }

}
