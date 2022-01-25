import { Component, Input, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
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
