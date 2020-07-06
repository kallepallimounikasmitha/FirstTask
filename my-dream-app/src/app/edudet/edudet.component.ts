import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edudet',
  templateUrl: './edudet.component.html',
  styleUrls: ['./edudet.component.css']
})
export class EdudetComponent implements OnInit {

  constructor() {}
  edu: string= "Educational Details";
  year ="";
  course = "";
  per="";
  ye="";
  co="";
  pe="";

  


  ngOnInit(): void {

  }

  disp(){
    this.ye = this.year;
    this.co=this.course;
    this.pe = this.per;
  }

}
