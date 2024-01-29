import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  endpoint: string = `http://localhost:3000/products`;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.endpoint).pipe((data: any) => data)
  }
  sendProduct(product: any) {
    return this.http.post(this.endpoint, product).pipe((data: any) => data)
  }
}
