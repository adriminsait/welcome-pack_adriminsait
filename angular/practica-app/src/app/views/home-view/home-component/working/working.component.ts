import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss']
})
export class WorkingComponent implements OnInit {
  title: String;
  body: String;

  constructor() {
    this.title = "Genial, ¿y esta página web como funciona?"
    this.body = "Estás en la página de inicio. Si pulsas en el enlace 'Lista', te redigirá a un listado de varios " +
    "personajes de la serie, cada uno recogido en una tarjeta. Si pinchas en un personaje, te mostrará sus datos."
  }

  ngOnInit(): void {
  }

}
