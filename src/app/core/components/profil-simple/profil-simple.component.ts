import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-simple',
  templateUrl: './profil-simple.component.html',
  styleUrls: ['./profil-simple.component.scss']
})
export class ProfilSimpleComponent implements OnInit {

  favouris = [{
    img: 'assets/images/favouris/chaussures.jpg',
    title: 'Chaussure',
    description:'Chaussures de sport idéale pour le footing'
  }
  ,{
    img: 'assets/images/favouris/parfum.jpg',
    title: 'Laptop',
    description:''
  },
  {
    img: 'assets/images/favouris/laptop.jpg',
    title: 'Parfun',
    description:''
  }];
  notifications: any[];
  public scrollbarOptions = { axis: 'yx', theme: 'dark-thin' };

  constructor() { }

  ngOnInit() {
  }

}
