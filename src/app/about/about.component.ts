import { Component, OnInit } from '@angular/core';
//import { TabsSectionComponent } from '../sections/tabs-section/tabs-section.component';

@Component({
    selector: 'app-landing',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss','../sections/navigation-section/navigation-section.component.css']
})

export class AboutComponent implements OnInit {
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
