import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/models/character';
import { CharacterService } from 'src/app/shared/services/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.scss']
})
export class DetailComponentComponent implements OnInit {
  characterId: string;
  character: CharacterInterface;

  constructor(private route: ActivatedRoute, private apiCall: CharacterService) {
    this.characterId = "";
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

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.characterId = params.get('characterId')!;
      var idN = parseInt(this.characterId);
      this.apiCall.getCharacterById(idN).subscribe((res) => {
        this.character = res;
      }, (err) => {
        console.error(err);
      });
    });
  }

}
