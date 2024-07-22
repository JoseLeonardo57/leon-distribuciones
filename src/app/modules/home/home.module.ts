import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { HomeComponent } from './pages/home/home.component';
import {HomeRoutingModule} from "@app/modules/home/home-routing.module";
import {SharedModule} from "@app/shared/shared.module";
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';



@NgModule({
  declarations: [
    MainHomeComponent,
    HomeComponent,
    ConocenosComponent,
    TrabajaConNosotrosComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
