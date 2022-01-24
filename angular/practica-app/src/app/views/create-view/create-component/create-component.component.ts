import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  character: CharacterInterface;

  constructor() {
    this.character = {
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

  createCharacter(){
    console.log(this.character);
  }

}
