import { Injectable, Inject } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/product-service/api/products`;

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getProductStock(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/inventory-service/api/inventory/${id}`);
  }
} 