import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainHomeComponent} from "@app/modules/home/pages/main-home/main-home.component";
import {HomeComponent} from "@app/modules/home/pages/home/home.component";
import {ConocenosComponent} from "@app/modules/home/pages/conocenos/conocenos.component";
import {TrabajaConNosotrosComponent} from "@app/modules/home/pages/trabaja-con-nosotros/trabaja-con-nosotros.component";
import {ContactanosComponent} from "@app/modules/home/pages/contactanos/contactanos.component";

const routes: Routes = [
  {
    path: '',
    component: MainHomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'conocenos',
        component: ConocenosComponent
      },
      {
        path: 'trabaja-con-nosotros',
        component: TrabajaConNosotrosComponent
      },
      {
        path: 'contactanos',
        component: ContactanosComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
