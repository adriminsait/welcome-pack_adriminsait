import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  title: String;
  body: String[];

  constructor() {
    this.title = "Vale muy bien, ¿y de que va dicha serie?";
    this.body = [
      "Rick es un científico irresponsable, alcohólico, egoísta y poco cuerdo que se muda a casa de su hija.",
      "Morty es el nieto de Rick, un niño de 14 años bastante timido y no muy avispado que digamos.",
      "La trama principal de la serie se basa en viajes temporales intergalácticos que realizan juntos " +
      "en los que se encuentran con vida extraterrestre y diferentes problemas.",
      "La serie es sarcástica, extravagante y absurda."
    ]
    console.log(this.body);
  }

  ngOnInit(): void {
  }

}
