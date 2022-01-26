import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/models/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
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
