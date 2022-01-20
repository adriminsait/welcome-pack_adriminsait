import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//EndPoint base sobre el que atacaremos
const baseUrl = 'https://rickandmortyapi.com/api/';

//La petición character
const characterUrl = baseUrl + 'character';

@Injectable()
export class RequestExampleService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(characterUrl);
  }
}