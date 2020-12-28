import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Product } from './../../../core/models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3000/products/";

  createProduct(model: Product){
    return this.http.post(this.baseUrl, model);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(productId: string): Observable<Product>{
    return this.http.get<Product>(this.baseUrl + productId);
  }

  constructor(private http: HttpClient) { }
}
