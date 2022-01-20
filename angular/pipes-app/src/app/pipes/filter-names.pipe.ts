import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'priorityName' })
export class PriorityNamePipe implements PipeTransform {
  transform(list: string[], filter: string = '') {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: string[] = list.filter((el: string) => {
      return el.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }
}