import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  head ="";
  date="";
  over= "";
  h="";
  d="";
  or="";
  

  ngOnInit(): void {
  }
  dis(){
    this.head = this.h;
    this.date=this.d;
    this.over = this.or;
  }

}
