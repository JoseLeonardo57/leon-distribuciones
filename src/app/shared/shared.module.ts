import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pag404Component } from './layouts/pag-404/pag-404.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
    declarations: [
        Pag404Component,
        NavbarComponent,
        FooterComponent
    ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SharedModule { }
