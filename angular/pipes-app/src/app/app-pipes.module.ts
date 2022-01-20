import { NgModule } from '@angular/core';
import { PriorityNamePipe } from './pipes/filter-names.pipe';

@NgModule({
  imports: [],
  declarations: [
    PriorityNamePipe
  ],
  exports: [
    PriorityNamePipe
  ]
})
export class AppPipesModule { }