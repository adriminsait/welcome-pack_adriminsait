import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  countryList: string[];
  filter: string;

  constructor() {
    this.filter = '';
    this.countryList = ['Spain', 'France', 'Portugal', 'Germany', 'Switzerland', 'Sweden', 'Holland', 'Italy', 'United Kingdom'];
  }

  ngOnInit() { }
}