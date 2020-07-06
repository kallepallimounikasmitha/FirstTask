import { Component, OnInit, Input } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() comingdata : string;
  constructor() { }
  ov = "Overview"
  twoov = " "
  values = " "
 

  ngOnInit(): void {
    alert(this.comingdata);
  }
  display(){
    this.values = this.twoov;
}
fullname(){
  return true;
}


}
