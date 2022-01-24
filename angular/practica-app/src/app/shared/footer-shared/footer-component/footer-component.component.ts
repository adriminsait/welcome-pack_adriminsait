import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {
  motivation: string;

  constructor() {
    this.motivation = "Este proyecto lo hago para aprender las funcionalidades de Angular.js " +
    "y así poder empezar a trabajar en el departamento de Front-end " +
    "y que no la lie ni se me complique el asunto";
  }

  ngOnInit(): void {
  }

}
