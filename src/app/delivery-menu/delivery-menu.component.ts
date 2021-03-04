import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-delivery-menu',
  templateUrl: './delivery-menu.component.html',
  styleUrls: ['./delivery-menu.component.css']
})
export class DeliveryMenuComponent implements OnInit {
  private api="https://staging.pearpartner.com/restaurant/9999";
  enable = true;
  products: any=[];
  id="6038aa7fc3419212f87499d6";

  constructor(private httpClient: HttpClient){}
  ngOnInit(){

    this.httpClient.get(this.api).subscribe(data =>{
      console.log(data);
      this.products=data;
    })
  }

}
