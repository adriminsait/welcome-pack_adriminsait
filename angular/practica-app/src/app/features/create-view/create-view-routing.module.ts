import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponentComponent } from './create-component.component';

const routes: Routes = [
    {
        path: '',
        component: CreateComponentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CreateViewRoutingModule{};