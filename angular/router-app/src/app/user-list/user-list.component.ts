import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: User[];

  constructor() {
    this.userList = [];
  }

  ngOnInit() {
    this.userList = [
      {
        id: 1,
        name: 'Jose',
      },
      {
        id: 2,
        name: 'Pedro',
      },
      {
        id: 3,
        name: 'Laura',
      }
    ];
  }

}