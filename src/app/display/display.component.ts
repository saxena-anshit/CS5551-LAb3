import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  calorieAmount: number;
  servingWeight: number;
  food: null;
  result;
  result2;
  constructor(private anyname: HttpClient) {
  }

  ngOnInit() {
    this.calorieAmount = 0.0;
    this.servingWeight = 0.0;
  }

  getNutrition() {
    if ((this.food != null)) {
      this.anyname.get('https://api.nutritionix.com/v1_1/search/' +
        this.food + '?results=0:1&fields=*&appId=9401e382&appKey=2a2056e203d636016e2756e125fdc9f8')
        .subscribe((result) => {
          this.result = result;
          this.calorieAmount = this.result.hits[0].fields.nf_calories;
          this.servingWeight = this.result.hits[0].fields.nf_serving_weight_grams;
          this.result2 = 'http://api.voicerss.org/?key=386cda37d86f4ea3a22ad8ad860a4165&hl=en-us&src=' + this.food;
          console.log(this.result2);
        });
    }
  }
  getFetchData(text: string) {
    if (text) {
      this.getNutrition();
    }
    if (text === '') {
      alert('Please enter a food to search');
    }

  }

}
