import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  urlImg = 'assets/images/acceuil/4.jpeg';
  constructor() { }

  ngOnInit() {
  }

}
