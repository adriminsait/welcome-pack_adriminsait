import { Pipe, PipeTransform } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/models/character';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(list: CharacterInterface[], filter: string = ''){
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: CharacterInterface[] = list.filter((el : CharacterInterface) => {
      return el.name.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }

}
