import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';
import { ApiCallService } from 'src/app/shared/api-call-shared/services/api-call.service';


@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  characterList: CharacterInterface[];
  filter: string;
  length: number;

  constructor(private apiCall: ApiCallService) {
    this.characterList = [];
    this.filter = "";
    this.length = 25;
  }

  ngOnInit() {
    this.apiCall.getCharacters().subscribe((datosPeticion: any[]) => {
      const arrayOri =  datosPeticion[0];
      const arrayNew = datosPeticion[1];
      Array.prototype.push.apply(arrayOri, arrayNew)
      this.characterList = arrayOri;
    }, (err) => {
      console.error(err);
    });
  }
}
