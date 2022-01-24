import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterInterface } from 'src/app/shared/api-call-shared/models/character';
import { ApiCallService } from 'src/app/shared/api-call-shared/services/api-call.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  status: string[];
  public createForm: FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private apiCall: ApiCallService) {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      species: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      status: ['', [Validators.required]],
      origin: ['', [Validators.required]]
    });
    this.status = ["Alive", "Dead", "Unknown"];
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    if (this.createForm.valid) {
      const character: CharacterInterface = {
        id: -1,
        name: this.createForm.get('name')!.value,
        image: this.createForm.get('image')!.value,
        species: this.createForm.get('species')!.value,
        gender: this.createForm.get('gender')!.value,
        status: this.createForm.get('status')!.value,
        origin:{
          name: this.createForm.get('origin')!.value,
        }
      };
      this.apiCall.createCharacter(character).subscribe( result => {
          result.subscribe(res => {
            console.log(res);
          })
        } );
      this.createForm.reset();
      this.submitted = false;
    }
  }

}
