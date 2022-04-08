import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product} from './product.class';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl: string = "http://localhost:3918/api/products";

  constructor(
    private http: HttpClient
  ) { }

  // Adding functions:

  // list(): get all rows
  list(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Product[]>;
  }

  // get(id): get a single row by primary key
  get(id: number): Observable<Product> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Product>;
  }

  // create(product): insert
  create(product: Product): Observable<Product> {
    return this.http.post(`${this.baseUrl}`, product) as Observable<Product>;
  }

  // change(product): update
  change(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/${product.id}`,product) as Observable<any>;
  }

  // remove(product): delete
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
