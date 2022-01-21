import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from '../models/character';
import { map, catchError } from 'rxjs';

const url = 'https://rickandmortyapi.com/api/character';

@Injectable()
export class ApiCallService {
  characterList: CharacterInterface[];

  constructor(private http: HttpClient) {
    this.characterList = [];
  }

  getCharacters() {
    return this.http.get(url).pipe(
      map((res: CharacterResponseInterface | any) => {
        if (!res) {
          throw new Error('Error trying to access de API');
        } else {
          const results: CharacterInterface[] = res.results;
          this.characterList = results;
          return results;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  getCharacterById(id: number){
    return this.characterList[id];
  }
  
}
