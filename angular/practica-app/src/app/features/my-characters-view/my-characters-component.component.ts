import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/models/character';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-my-characters-component',
  templateUrl: './my-characters-component.component.html',
  styleUrls: ['./my-characters-component.component.scss']
})
export class MyCharactersComponentComponent implements OnInit {
  characterList: CharacterInterface[];

  constructor(private apiCall: CharacterService) {
    this.characterList = [];
  }

  ngOnInit(){
    this.apiCall.getMyCharacters().subscribe((result: CharacterInterface[]) => {
      this.characterList = result;
    }, (err) => {
      console.error(err);
    });
  }

}
