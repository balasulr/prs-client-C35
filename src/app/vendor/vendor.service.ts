import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})

export class VendorService {

  baseUrl: string = "http://localhost:3918/api/vendors";

  constructor(
    private http: HttpClient
  ) { }

  // Adding functions:

  // list(): get all rows
  list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Vendor[]>;
  }

  // get(id): get a single row by primary key
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Vendor>;
  }

  // create(user): insert
  create(user: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseUrl}`, user) as Observable<Vendor>;
  }

  // change(user): update
  change(user: Vendor): Observable<any> {
    return this.http.put(`${this.baseUrl}/${user.id}`,user) as Observable<any>;
  }

  // remove(user): delete
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
