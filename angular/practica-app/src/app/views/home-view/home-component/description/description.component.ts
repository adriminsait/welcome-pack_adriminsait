import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  question: String;
  answer: String;


  constructor() {
    this.question = "Espera antes de nada, ¿quienes son Rick y Morty?";
    this.answer = "Son dos personajes de una serie animada de televisión estadounidense."
  }

  ngOnInit(): void {
  }

}
