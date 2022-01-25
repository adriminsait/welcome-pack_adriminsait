import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';
import { ApiCallService } from 'src/app/shared/api-call-shared/services/api-call.service';

@Component({
  selector: 'app-my-character-detail-component',
  templateUrl: './my-character-detail-component.component.html',
  styleUrls: ['./my-character-detail-component.component.scss']
})
export class MyCharacterDetailComponentComponent implements OnInit {
  status: string[];
  characterId: string;
  character: CharacterInterface;
  updating: boolean;
  public createForm: FormGroup;

  constructor(private route: ActivatedRoute, private apiCall: ApiCallService, private formBuilder: FormBuilder) {
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
    this.updating = false;
    this.createForm = this.formBuilder.group({
      name: [''],
      image: [''],
      species: [''],
      gender: [''],
      status: [''],
      origin: ['']
    });
    this.status = ["Alive", "Dead", "Unknown"];
  }

  ngOnInit(){
    this.getCharacter();
  }

  getCharacter(){
    this.route.paramMap.subscribe(params => {
      this.characterId = params.get('characterId')!;
      var idN = parseInt(this.characterId);
      this.apiCall.getMyCharacterById(idN).subscribe((res) => {
        this.character = res;
      }, (err) => {
        console.error(err);
      });
    });
  }

  deleteCharacter(){
    this.apiCall.deleteCharacter(this.character.id).subscribe((res) => {
      
    }, (err) => {
      console.error(err);
    });
  }

  setUpdating(){
    this.updating = true;

    this.createForm = this.formBuilder.group({
      name: [this.character.name],
      image: [this.character.image],
      species: [this.character.species],
      gender: [this.character.gender],
      status: [this.character.status],
      origin: [this.character.origin.name]
    });
  }

  updateCharacter(){
    console.log("hola");

    this.character = {
      id: this.character.id,
      name: this.createForm.get('name')!.value,
      image: this.createForm.get('image')!.value,
      species: this.createForm.get('species')!.value,
      gender: this.createForm.get('gender')!.value,
      status: this.createForm.get('status')!.value,
      origin:{
        name: this.createForm.get('origin')!.value,
      }
    };

    this.apiCall.updateCharacter(this.character).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.error(err);
    });

    this.updating = false;
    
  }

}
