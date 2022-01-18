import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  title: string = 'Student';
  isDone: boolean;
  avengers = ['Spiderman','Iron-man', 'Hulk', 'Thor']

  constructor() {
    this.isDone = true;
    this.title = 'Listado de Alumnos';
    console.log(this.title);
    console.log('constructor finalizado');

  }

  ngOnInit() {
    console.log(this.title);
    console.log('ngOnInit finalizado');
  }

  onButtonClick() : void {
    console.log('clicked!')
  }

}
