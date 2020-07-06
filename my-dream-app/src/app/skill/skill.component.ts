import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  l="";
  f="";
  o="";
  lang="";
  frame="";
  os="";


  constructor() { }

  ngOnInit(): void {
  }
  displayed(){
    this.lang = this.l;
    this.frame=this.f;
    this.os = this.o;
  }

}
