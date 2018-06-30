import { ActualiteComponent } from './../core/components/actualite/actualite.component';
import { WhoAreESComponent } from './../core/components/who-are-es/who-are-es.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentMessageComponent } from './components/content-message/content-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ArticleComponent } from './components/article/article.component';
import { FavouriComponent } from './components/favouri/favouri.component';
import { WhyESComponent } from '../core/components/why-es/why-es.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'quiSommesNous',
        component: WhoAreESComponent
      },
      {
          path: 'pourquoiEasyShop',
          component: WhyESComponent
      },
      {
        path: 'actualite', component: ActualiteComponent
      }
      ])
    ],
  declarations: [
    ContentMessageComponent,
    FooterComponent,
    NotFoundComponent,
    ArticleComponent,
    FavouriComponent
  ],
  exports: [
    ContentMessageComponent,
    FooterComponent,
    NotFoundComponent,
    ArticleComponent,
    FavouriComponent,
  ]
})
export class SharedModule { }
