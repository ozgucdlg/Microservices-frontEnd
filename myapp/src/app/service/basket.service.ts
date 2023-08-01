import { BasketModel } from 'src/app/models/basket.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baskets:BasketModel[]=[];

  constructor() { }
}
