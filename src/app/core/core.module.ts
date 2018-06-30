import { HttpModule } from '@angular/http';
import { ChatService } from './services/chat.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ChatComponent } from './components/chat/chat.component';
import { MagasinComponent } from './components/magasin/magasin.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { CoreRoutingModule } from './coreRouting.module';
import { RouterModule } from '@angular/router';
import { SpeechRecognitionService } from './services/speech-recognition-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { NgxAutoScrollModule} from "ngx-auto-scroll";
import { ProfilVendeurComponent } from './components/profil-vendeur/profil-vendeur.component';
import { ProfilSimpleComponent } from './components/profil-simple/profil-simple.component';
import { UtilsComponent } from './components/utils/utils.component';
import { WhyESComponent } from './components/why-es/why-es.component';
import { WhoAreESComponent } from './components/who-are-es/who-are-es.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { LogupComponent } from './components/logup/logup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ScrollToModule.forRoot(),
    CoreRoutingModule,
    FormsModule,
    LoadingModule,
    BrowserAnimationsModule,
    NgxAutoScrollModule,
    MalihuScrollbarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule
  ],
  declarations: [
    NavbarComponent,
    AcceuilComponent,
    ChatComponent,
    MagasinComponent,
    ActualiteComponent,
    ProfilVendeurComponent,
    ProfilSimpleComponent,
    UtilsComponent,
    WhyESComponent,
    WhoAreESComponent,
    ContactComponent,
    LoginComponent,
    LogupComponent,
  ],
  providers: [
    SpeechRecognitionService,
    ChatService,
  ],
  exports: [
    NavbarComponent,
    AcceuilComponent,
    ChatComponent,
    MagasinComponent,
    ActualiteComponent,
    WhoAreESComponent,
    WhyESComponent
  ],
})
export class CoreModule { }