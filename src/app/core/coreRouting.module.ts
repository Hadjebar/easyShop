import { MagasinComponent } from './components/magasin/magasin.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

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
        path: '**', component: NotFoundComponent
    }
   
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