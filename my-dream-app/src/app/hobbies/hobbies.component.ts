import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }
  hobbies: string = "Hobbies";
  ho=""
  hob=""

  ngOnInit(): void {
  }
  d(){
    this.ho =this.hob;
  }

}
