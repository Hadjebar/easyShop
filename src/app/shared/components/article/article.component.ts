import { article } from './../../models/article';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input('articles') articles: article[];
  @Input('color') color: string;
  constructor() { }

  ngOnInit() {
  }

}
