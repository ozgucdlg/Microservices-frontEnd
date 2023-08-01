import { BasketModel } from 'src/app/models/basket.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {


  api:string="http://localhost:3000"
  baskets:BasketModel[]=[];

  constructor(private httpClient:HttpClient) { 
    this.getBasket();
  }


  delete(id:number){
    this.httpClient.delete<any>(this.api+ "baskets/" + id).subscribe({
      next:()=>this.getBasket(),
      error:(err)=>console.log(err)

    })
  }

  getBasket(){
    this.httpClient.get<any>(this.api +  "baskets" ).subscribe({
      next:(res)=> this.baskets= res,
      error:(err)=>console.log(err)
    })
  }
}
