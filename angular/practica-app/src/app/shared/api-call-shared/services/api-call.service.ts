import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from '../models/character';
import { map, catchError, Observable, forkJoin } from 'rxjs';

const urlOri = 'http://localhost:3000/charactersOriginals/';
const urlNew = 'http://localhost:3000/charactersNews/';

@Injectable()
export class ApiCallService {
  characterList: CharacterInterface[];
  obsOri: Observable<any>;
  obsNew: Observable<any>;
  joinedObservable: Observable<any>;

  constructor(private http: HttpClient) {
    this.characterList = [];
    this.obsOri = this.http.get(urlOri).pipe(
        map((res: CharacterResponseInterface | any) => {
          if (!res) {
            throw new Error('Error trying to access de API **ORIGINAL**');
          } else {
            const results: CharacterInterface[] = res;
            return results;
          }
        }),
        catchError(err => {
          throw new Error(err.message);
        })
      );
    this.obsNew = this.http.get(urlNew).pipe(
      map((res: CharacterResponseInterface | any) => {
        if (!res) {
          throw new Error('Error trying to access de API **NEW**');
        } else {
          const results: CharacterInterface[] = res;
          return results;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
    this.joinedObservable = forkJoin([this.obsOri, this.obsNew]);
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

    return this.joinedObservable;
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
          throw new Error('Error trying to access de API **ORIGINAL** for character ' + id);
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
