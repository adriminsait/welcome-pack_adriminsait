import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponentComponent } from './shared/navbar-shared/navbar-component/navbar-component.component';
import { DetailComponentComponent } from './views/detail-view/detail-component/detail-component.component';

import { HomeComponentComponent } from './views/home-view/home-component/home-component.component';
import { ListComponentComponent } from './views/list-view/list-component/list-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponentComponent},
  { path: 'list', component: ListComponentComponent},
  { path: 'list/:characterId', component: DetailComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
