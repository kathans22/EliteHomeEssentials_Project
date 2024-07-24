import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;

  constructor() { }

  ngOnInit() {}

}
