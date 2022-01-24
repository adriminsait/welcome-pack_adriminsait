import { Pipe, PipeTransform } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';

@Pipe({
  name: 'filterLength'
})
export class FilterLengthPipe implements PipeTransform {

  transform(list: CharacterInterface[], filter: number){
    if(filter < list.length){
      const splicedList: CharacterInterface[] = list.splice(0, filter);
      return splicedList;
    }
    else{
      return list;
    }
  }

}
