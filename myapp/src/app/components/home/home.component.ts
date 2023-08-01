import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private httpClient:HttpClient){
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

}
