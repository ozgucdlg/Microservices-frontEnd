import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { BasketService } from '../../../service/basket.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private productService: ProductService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
        console.error('Error loading products:', error);
      }
    });
  }

  addToCart(product: any): void {
    this.basketService.getBasket();
    // Add product to basket logic will be implemented here
    console.log('Adding to cart:', product);
  }
} 