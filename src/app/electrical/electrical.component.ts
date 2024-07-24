import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './electrical.component.html',
    styleUrls: ['./electrical.component.scss']
})

export class ElectricalComponent implements OnInit {
  focus: any;
  focus1: any;
  serviceTexts = ['Add Service', 'Add Service', 'Add Service'];
  flags = [false, false, false];

  constructor() { }

  ngOnInit() {}

  handleClick(index: number): void {
    if (!this.flags[index]) {
      this.serviceTexts[index] = "Service Placed";
      //this.title[index] =  "Service Message 😀";
      //this.description[index] = "Your service has been placed 👷‍♂️👷‍♀️.";
    } else {
      this.serviceTexts[index] = "Add Service";
      //this.title[index] =  "Service Removed";
      //this.description[index] = "Service has been removed from your selection.";
    }
    this.flags[index] = !this.flags[index]; // Toggle the flag value for the clicked button
  }

}
