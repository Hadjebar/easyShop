import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ChatComponent } from './components/chat/chat.component';
import { MagasinComponent } from './components/magasin/magasin.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { CoreRoutingModule } from './coreRouting.module';
import { RouterModule } from '@angular/router';
import { SpeechRecognitionService } from './services/speech-recognition-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ScrollToModule.forRoot(),
    CoreRoutingModule,
    FormsModule,
  ],
  declarations: [
    NavbarComponent,
    AcceuilComponent,
    ChatComponent,
    MagasinComponent,
    ActualiteComponent
  ],
  providers: [
    SpeechRecognitionService,
  ],
  exports: [
    NavbarComponent,
    AcceuilComponent,
    ChatComponent,
    MagasinComponent,
    ActualiteComponent
  ],
})
export class CoreModule { }