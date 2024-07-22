import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Pag404Component} from "@app/shared/layouts/pag-404/pag-404.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**',
    component: Pag404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
