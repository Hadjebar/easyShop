import { WhoAreESComponent } from './components/who-are-es/who-are-es.component';
import { ProfilSimpleComponent } from './components/profil-simple/profil-simple.component';
import { MagasinComponent } from './components/magasin/magasin.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ProfilVendeurComponent } from './components/profil-vendeur/profil-vendeur.component';
import { WhyESComponent } from './components/why-es/why-es.component';
import { LoginComponent } from './components/login/login.component';
import { LogupComponent } from './components/logup/logup.component';


const routes: Routes = [
    { 
        path: '', 
        redirectTo : 'accueil',
        pathMatch: 'full'
    },
    {
        path: 'accueil', component: AcceuilComponent
    },
    {
        path: 'magasin', component: MagasinComponent
    },
    {
        path: 'actualite', component: ActualiteComponent
    },
    { 
        path: 'login', 
        component:  LoginComponent
    },
    { 
        path: 'signup', 
        component: LogupComponent
    },
    { 
        path: 'user/:idSimple', 
        component: ProfilSimpleComponent
    },
    {
        path: 'vendeur/:idVendeur',
        component: ProfilVendeurComponent
    },
    {
        path: '**', component: NotFoundComponent
    },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class CoreRoutingModule { }