import { BasketService } from './../../service/basket.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket.model';
import { ProductModel } from 'src/app/models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  api:string=" http://localhost:3000/"
  product:ProductModel= new ProductModel();
 
  products:ProductModel[]=[  ];

 

  constructor(private httpClient:HttpClient, private BasketService:BasketService){
    }
  ngOnInit(): void {
    
    
    this.getProductList();
   
  }

  getProductList(){
    this.httpClient.get<any>(this.api  + "products").subscribe({
      next:(res)=> this.products= res,
      error:(err)=>console.log(err)
    })
  }


  addProduct(){
   this.httpClient.post<any>(this.api+ "products", this.product).subscribe({
    next:(res)=>{
      this.getProductList();
      this.product= new ProductModel();
    },
    error:(err)=>console.log(err)
   })  
  }

  addToCart(model:ProductModel){

    this.httpClient.post<any>(this.api + "baskets",model ).subscribe({
      next:()=> {console.log("Sepete urun eklendi")
      this.getBasket();
    },
      error:(err)=>console.log(err)
    })
  }

  getBasket(){
    this.httpClient.get<any>(this.api +  "baskets" ).subscribe({
      next:(res)=> this.BasketService.baskets= res,
      error:(err)=>console.log(err)
    })
  }
}
