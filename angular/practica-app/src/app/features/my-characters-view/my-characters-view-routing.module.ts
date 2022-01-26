import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCharactersComponentComponent } from './my-characters-component.component';

const routes: Routes = [
    {
        path: '',
        component: MyCharactersComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MyCharactersViewsRoutingModule{};