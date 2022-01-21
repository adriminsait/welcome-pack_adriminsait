import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';
import { ApiCallService } from 'src/app/shared/api-call-shared/services/api-call.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.scss']
})
export class DetailComponentComponent implements OnInit {
  userId: string;
  character: CharacterInterface;

  constructor(private route: ActivatedRoute, private apiCall: ApiCallService) {
    this.userId = "";
    this.character = {
      id: -13,
      name: "",
      image: "",
    };
  }

  ngOnInit() {
    const obsUno: Observable<any> = this.httpClient.get(this.urlPeticionUno);
    const obsDos: Observable<any> = this.httpClient.get(this.urlPeticionDos);

    this.route.paramMap.subscribe(params => {
      this.userId = params.get('characterId')!;
      var idN = parseInt(this.userId);
      this.character = this.apiCall.getCharacterById(idN);
      if(this.character === undefined){
        this.apiCall.getCharacters().subscribe((res) => {
          this.character = res[idN];
        }, (err) => {
          console.error(err);
        });
      }
      console.log(this.character);
    });
  }

}
