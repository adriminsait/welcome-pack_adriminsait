import { Component, OnInit } from '@angular/core';
import { CharacterResponseInterface, CharacterInterface } from './models/character';
import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  characterList: CharacterInterface[];

  constructor(private apiCall: ApiCallService) {
    this.characterList = [];
  }

  ngOnInit() {
    // Utilizamos la función getCharacters para guardar nuestros resultados:
    this.apiCall.getCharacters().subscribe((data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results;

      const formattedResults = results.map(({ id, name, image }) => ({
        id,
        name,
        image,
      }));
      this.characterList = formattedResults;
    });
  }

}
