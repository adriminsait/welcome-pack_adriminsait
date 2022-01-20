import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'https://rickandmortyapi.com/api/character';

@Injectable()
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(url);
  }
}
