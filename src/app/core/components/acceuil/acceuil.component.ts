import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  
  srcImg = 'assets/images/acceuil/1.jpeg';
  srcIcon = 'assets/images/acceuil/2.png';
  
  constructor() { }

  ngOnInit() {
  }

}
