import { Component, OnInit } from '@angular/core';
import * as data from '../meals.json';

@Component({
  selector: 'app-meals-one',
  templateUrl: './meals-one.component.html',
  styleUrls: ['./meals-one.component.css']
})
export class MealsOneComponent implements OnInit {

  products: any = (data as any).default;

  constructor(){}
  ngOnInit(){
    console.log(this.products);
  }

}
