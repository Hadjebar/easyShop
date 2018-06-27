import { article } from './../../../shared/models/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  urlImg = 'assets/images/acceuil/4.jpeg';
  articles: article[] = [{
    imgUrl: 'assets/images/acceuil/4.jpeg',
    titre: 'Nouveau magasin de vente des ordinateurs',
    sousTitre: 'Comment louer une voiture lorsqu\'on a moins de 25 ans ? On fait le point sur la situation, et on vous résume en tout ce qu\'il faut savoir : tarifs, suppléments jeune conducteur, assurance, âge minimum et nombres d\'années de permis demandées.',
    date: '25 janvier 2018',
    auteur : 'Hadjebar Rabah',
  },
  {
    imgUrl: 'assets/images/acceuil/4.jpeg',
    titre: 'Nouveau magasin de vente des ordinateurs',
    sousTitre: 'Comment louer une voiture lorsqu\'on a moins de 25 ans ? On fait le point sur la situation, et on vous résume en tout ce qu\'il faut savoir : tarifs, suppléments jeune conducteur, assurance, âge minimum et nombres d\'années de permis demandées.',
    date: '25 janvier 2018',
    auteur : 'Hadjebar Rabah',
  },
  {
    imgUrl: 'assets/images/acceuil/4.jpeg',
    titre: 'Nouveau magasin de vente des ordinateurs',
    sousTitre: 'Comment louer une voiture lorsqu\'on a moins de 25 ans ? On fait le point sur la situation, et on vous résume en tout ce qu\'il faut savoir : tarifs, suppléments jeune conducteur, assurance, âge minimum et nombres d\'années de permis demandées.',
    date: '25 janvier 2018',
    auteur : 'Hadjebar Rabah',
  },
  {
    imgUrl: 'assets/images/acceuil/4.jpeg',
    titre: 'Nouveau magasin de vente des ordinateurs',
    sousTitre: 'Comment louer une voiture lorsqu\'on a moins de 25 ans ? On fait le point sur la situation, et on vous résume en tout ce qu\'il faut savoir : tarifs, suppléments jeune conducteur, assurance, âge minimum et nombres d\'années de permis demandées.',
    date: '25 janvier 2018',
    auteur : 'Hadjebar Rabah',
  }]; 
  constructor() { }

  ngOnInit() {
  }

}
