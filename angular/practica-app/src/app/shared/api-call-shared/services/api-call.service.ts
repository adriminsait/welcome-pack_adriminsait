import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from '../models/character';
import { map, catchError, Observable, forkJoin } from 'rxjs';

const urlOri = 'http://localhost:3000/charactersOriginals/';
const urlNew = 'http://localhost:3000/charactersNews/';

//los nuevos empiezan a partir del id 10000
const idNews = 10000;

@Injectable()
export class ApiCallService {
  characterList: CharacterInterface[];

  constructor(private http: HttpClient) {
    this.characterList = [];
  }

  getCharacters() {
    // return this.http.get(urlOri).pipe(
    //   map((res: CharacterResponseInterface | any) => {
    //     if (!res) {
    //       throw new Error('Error trying to access de API');
    //     } else {
    //       const results: CharacterInterface[] = res;
    //       this.characterList = results;
    //       console.log(res);
    //       return results;
    //     }
    //   }),
    //   catchError(err => {
    //     throw new Error(err.message);
    //   })
    // );
    
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
    var urlId: string;
    if(id < 100){
      urlId = urlOri + id;
    }
    else{
      urlId = urlNew + id;
    }
    
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

  createCharacter(character: CharacterInterface){

    return this.http.get(urlNew).pipe(
      map((res: CharacterResponseInterface | any) => {
        if (!res) {
          throw new Error('Error trying to access the API **NEW**');
        } else {
          const numCharacters = res.length;
          var idN = idNews + numCharacters;
          character.id = idN;
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
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  
}
