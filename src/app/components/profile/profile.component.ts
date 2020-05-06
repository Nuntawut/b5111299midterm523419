import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string;
  name: string;
  year: number;

  constructor() { }

  ngOnInit(): void {
    this.id = "B5111299";
    this.name = "Nuntawut Kaoungku";
    this.year = 1989;
  }

  getName(){
    return this.name;
  }

}

