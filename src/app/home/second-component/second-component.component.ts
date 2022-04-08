import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.less']
  //, encapsulation: ViewEncapsulation.None
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
