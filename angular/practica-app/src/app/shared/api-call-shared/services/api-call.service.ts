import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from '../models/character';
import { map, catchError, Observable, forkJoin } from 'rxjs';

const urlOri = 'http://localhost:3000/charactersOriginals/';
const urlNew = 'http://localhost:3000/charactersNews/';

@Injectable()
export class ApiCallService {
  characterList: CharacterInterface[];

  constructor(private http: HttpClient) {
    this.characterList = [];
  }

  getCharacters() {
    var obsOri: Observable<any>;
    var obsNew: Observable<any>;
    var joinedObservable: Observable<any>;

    obsOri = this.http.get(urlOri).pipe(
      map((res: CharacterResponseInterface | any) => {
        if (!res) {
          throw new Error('Error trying to access the API **ORIGINAL**');
        } else {
          const results: CharacterInterface[] = res;
          return results;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );

    obsNew = this.http.get(urlNew).pipe(
      map((res: CharacterResponseInterface | any) => {
        if (!res) {
          throw new Error('Error trying to access the API **NEW**');
        } else {
          const results: CharacterInterface[] = res;
          return results;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );

    joinedObservable = forkJoin([obsOri, obsNew]);

    return joinedObservable;
  }

  getCharacterById(id: number){
    var urlId = urlOri + id;
   
    return this.http.get(urlId).pipe(
      map((res: CharacterInterface | any) => {
        if (!res) {
          throw new Error('Error trying to access the API **ORIGINAL** for character ' + id);
        } else {
          return res;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  getMyCharacters(){
    return this.http.get(urlNew).pipe(
      map((res: CharacterResponseInterface | any) => {
        if (!res) {
          throw new Error('Error trying to access the API **NEW**');
        } else {
          const results: CharacterInterface[] = res;
          return results;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  getMyCharacterById(id: number){
    var urlId: string = urlNew + id;
    
    return this.http.get(urlId).pipe(
      map((res: CharacterInterface | any) => {
        if (!res) {
          throw new Error('Error trying to access the API **NEW** for character ' + id);
        } else {
          return res;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  async createCharacter(character: Object){
    return this.http.post(urlNew, character).pipe(
      map((res: CharacterInterface | any) => {
        if (!res) {
          throw new Error('Error trying to POST character ');
        } else {
          return res;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  async deleteCharacter(id: Object){
    var urlId: string = urlNew + id;

    return this.http.delete(urlId).pipe(
      map((res: CharacterInterface | any) => {
        if (!res) {
          throw new Error('Error trying to deleting character ' + id);
        } else {
          return res;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  async updateCharacter(character: CharacterInterface){
    var urlId: string = urlNew + character.id;

    return this.http.patch(urlId, character).pipe(
      map((res: CharacterInterface | any) => {
        if (!res) {
          throw new Error('Error trying to updating character ' + character.id);
        } else {
          return res;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  
}
