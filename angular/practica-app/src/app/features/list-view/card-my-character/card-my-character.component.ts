import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/models/character';

@Component({
  selector: 'app-card-my-character',
  templateUrl: '../../my-characters-view/card/card.component.html',
  styleUrls: ['../../my-characters-view/card/card.component.scss']
  /* urls originales:
  templateUrl: './card-my-character.component.html',
  styleUrls: ['./card-my-character.component.scss']
   */
})
export class CardMyCharacterComponent implements OnInit {
  
  @Input() inputCharacter: CharacterInterface;

  constructor() {
    this.inputCharacter= {
      id: -1,
      name: "",
      image: "",
      species: "",
      gender: "",
      status: "",
      origin:{
        name: ""
      }
    };
  }

  ngOnInit(): void {
  }

}
