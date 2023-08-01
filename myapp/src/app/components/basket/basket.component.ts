import { BasketService } from './../../service/basket.service';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements AfterContentChecked {

  baskets:BasketModel[]=[];

  constructor(private basketService:BasketService){}

  ngAfterContentChecked(): void {
    this.baskets= this.basketService.baskets;
  }

 

  delete(id:number){
    this.basketService.delete(id);
  }

}
