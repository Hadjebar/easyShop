import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentMessageComponent } from './components/content-message/content-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentMessageComponent,
    FooterComponent,
    NotFoundComponent,
    ArticleComponent
  ],
  exports: [
    ContentMessageComponent,
    FooterComponent,
    NotFoundComponent,
    ArticleComponent
  ]
})
export class SharedModule { }
