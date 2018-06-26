import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    AcceuilComponent
  ],
  exports: [
    NavbarComponent,
    AcceuilComponent
  ],
})
export class CoreModule { }