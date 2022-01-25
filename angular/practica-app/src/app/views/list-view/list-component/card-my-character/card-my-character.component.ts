import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';

@Component({
  selector: 'app-card-my-character',
  // templateUrl: './card-my-character.component.html',
  // styleUrls: ['./card-my-character.component.scss']
  templateUrl: '../../../my-characters-view/my-characters-component/card/card.component.html',
  styleUrls: ['../../../my-characters-view/my-characters-component/card/card.component.scss']
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
