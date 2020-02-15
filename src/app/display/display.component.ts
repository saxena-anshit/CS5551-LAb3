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
  foodDisplayName: string;
  food: null;
  result;
  audio;
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
          this.foodDisplayName = this.result.hits[0].fields.item_name;
          this.calorieAmount = this.result.hits[0].fields.nf_calories;
          this.servingWeight = this.result.hits[0].fields.nf_serving_weight_grams;
          this.audio = 'http://api.voicerss.org/?key=ade47324fca4489d9bc43643a6e2a2cf&hl=en-us&src=' + this.food;
          console.log(this.audio);
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
