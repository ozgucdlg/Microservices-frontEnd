import { BasketService } from './../../service/basket.service';
import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket.model';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements AfterContentChecked {
  
  api:string="http://localhost:3000"
  baskets:BasketModel[]=[]

  constructor(private basketService:BasketService){

  }
  ngAfterContentChecked(): void {
    this.getBasket();
  }
 
  getBasket(){
    this.baskets = this.basketService.baskets;
  }

}
