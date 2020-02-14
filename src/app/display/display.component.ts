import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  private calorieAmount: number;
  private servingWeight: number;
  constructor() { }

  ngOnInit() {
    this.calorieAmount = 2.0;
    this.servingWeight = 3.0;
  }

  getFetchData(text: string) {
    if (text === '') {
      alert('Please enter a food to search');
    }

  }

}
