import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  constructor() { }
  pd = "Personal Details";
  twopd= "";
  mail="";
  git="";
  linked ="";
  values="";
  vmail ="";
  vlinked="";
  vgit="";


  ngOnInit(): void {
  }
  
    

display1(){
  this.values = this.twopd;
  this.vmail = this.mail;
  this.vgit =this.git;
  this.vlinked = this.linked;
}


}
