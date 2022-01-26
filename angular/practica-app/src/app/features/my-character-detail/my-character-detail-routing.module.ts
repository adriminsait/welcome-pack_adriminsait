import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCharacterDetailComponentComponent } from './my-character-detail-component.component';

const routes: Routes = [
    {
        path: '',
        component: MyCharacterDetailComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MyCharacterDetailRoutingModule{};