import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alive',
  templateUrl: './alive.component.html',
  styleUrls: ['./alive.component.scss']
})
export class AliveComponent implements OnInit {

  @Input()inputStatus: String;

  constructor() {
    this.inputStatus = "";
  }

  ngOnInit(): void {
    
  }

  isAlive(){
    if(this.inputStatus == "Alive"){
      return true;
    }
    else{
      return false;
    }
  }

  isDead(){
    if(this.inputStatus == "Dead"){
      return true;
    }
    else{
      return false;
    }
  }

}
