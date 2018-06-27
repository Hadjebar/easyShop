import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  
  srcImg = 'assets/images/acceuil/1.jpeg';
  srcIcon = 'assets/images/acceuil/2.png';
  urlChat = 'assets/images/acceuil/3.png';

  constructor() { }

  ngOnInit() {
    $(window).scroll(function() {
      if ($('.navbar').offset().top > 70) {
       $('.navbar').addClass('navbar-scroll');
      } else {
       $('.navbar').removeClass('navbar-scroll');
      }
    });
  }

}
