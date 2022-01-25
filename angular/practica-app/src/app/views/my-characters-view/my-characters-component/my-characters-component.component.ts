import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';
import { ApiCallService } from 'src/app/shared/api-call-shared/services/api-call.service';

@Component({
  selector: 'app-my-characters-component',
  templateUrl: './my-characters-component.component.html',
  styleUrls: ['./my-characters-component.component.scss']
})
export class MyCharactersComponentComponent implements OnInit {
  characterList: CharacterInterface[];

  constructor(private apiCall: ApiCallService) {
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
