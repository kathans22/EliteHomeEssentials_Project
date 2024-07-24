import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './fire.component.html',
    styleUrls: ['./fire.component.scss']
})

export class FireComponent implements OnInit {
  focus: any;
  focus1: any;
  // serviceText = 'Add Service';
  // flag = false;

  serviceTexts = ['Add Service', 'Add Service', 'Add Service'];
  flags = [false, false, false];
  //title = ['Service Message 😀','Service Message 😀','Service Message 😀'];
  //description = ['Your service has been placed 👷‍♂️👷‍♀️','Your service has been placed 👷‍♂️👷‍♀️','Your service has been placed 👷‍♂️👷‍♀️'];
  constructor() { }

  ngOnInit() {}

  // handleClick(event: Event): void {
  //   //console.log('Element clicked:', event.target);
    
  //   if(!this.flag)
  //   {
  //     this.serviceText = "Service Placed";
  //     //this.flag = true;
  //   }
  //   else
  //   {
  //     this.serviceText = "Add Service";
  //     //this.flag = true;
  //   }

  //   this.flag = !this.flag;

  // }

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
