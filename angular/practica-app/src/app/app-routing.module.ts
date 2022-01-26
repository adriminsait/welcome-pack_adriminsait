import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponentComponent } from './features/create-view/create-component.component';
import { DetailComponentComponent } from './features/detail-view/detail-component.component';
import { HomeComponentComponent } from './features/home-view/home-component.component';
import { ListComponentComponent } from './features/list-view/list-component.component';
import { MyCharacterDetailComponentComponent } from './features/my-character-detail/my-character-detail-component.component';
import { MyCharactersComponentComponent } from './features/my-characters-view/my-characters-component.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full',
  },
  { 
    path: 'home', 
    loadChildren: () => import('./features/home-view/home-view.module').then(m => m.HomeViewModule)
  },
  { 
    path: 'list', 
    loadChildren: () => import('./features/list-view/list-view.module').then(m => m.ListViewModule)
  },
  { 
    path: 'list/:characterId', 
    loadChildren: () => import('./features/detail-view/detail-view.module').then(m => m.DetailViewModule)
  },
  { path: 'myCharacters', 
    loadChildren: () => import('./features/my-characters-view/my-characters-view.module').then(m => m.MyCharactersViewModule)
  },
  { path: 'myCharacters/:characterId', 
    loadChildren: () => import('./features/my-character-detail/my-character-detail.module').then(m => m.MyCharacterDetailModule)
  },
  { path: 'createCharacter', 
    loadChildren: () => import('./features/create-view/create-view.module').then(m => m.CreateViewModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
