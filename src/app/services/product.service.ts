import { inject, Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor() { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);

  }
}
