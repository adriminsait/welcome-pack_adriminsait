import { NgModule } from '@angular/core';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { FilterLengthPipe } from './pipes/filter-length.pipe';


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