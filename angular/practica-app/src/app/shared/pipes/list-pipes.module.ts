import { NgModule } from '@angular/core';
import { FilterNamePipe } from './filter-name.pipe';
import { FilterLengthPipe } from './filter-length.pipe';


@NgModule({
  imports: [],
  declarations: [
    FilterNamePipe,
    FilterLengthPipe
  ],
  exports: [
    FilterNamePipe,
    FilterLengthPipe
  ]
})
export class ListPipesModule { }