import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/models/character';
import { CharacterService } from 'src/app/shared/services/character.service';


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  characterListOriginal: CharacterInterface[];
  characterListNew: CharacterInterface[];
  filter: string;
  length: number;

  constructor(private apiCall: CharacterService) {
    this.characterListOriginal = [];
    this.characterListNew = [];
    this.filter = "";
    this.length = 25;
  }

  ngOnInit() {
    this.apiCall.getCharacters().subscribe((data: any[]) => {
      this.characterListOriginal = data[0];
      this.characterListNew = data[1];
    }, (err) => {
      console.error(err);
    });
  }
}
