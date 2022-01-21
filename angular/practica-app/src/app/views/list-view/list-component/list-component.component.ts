import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';
import { ApiCallService } from 'src/app/shared/api-call-shared/services/api-call.service';


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  characterList: CharacterInterface[] = [];

  constructor(private apiCall: ApiCallService) {}

  ngOnInit() {
    this.apiCall.getCharacters().subscribe((res) => {
      this.characterList = res;
      console.log(this.characterList);
    }, (err) => {
      console.error(err);
    });
  }

}
