import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseUrl: string = "http://localhost:3918/api/requestlines";

  constructor(
    private http: HttpClient
  ) { }

  // Adding functions:

  // list(): get all rows
  list(): Observable<Requestline[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Requestline[]>;
  }

  // get(id): get a single row by primary key
  get(id: number): Observable<Requestline> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Requestline>;
  }

  // create(requestline): insert
  create(requestline: Requestline): Observable<Requestline> {
    return this.http.post(`${this.baseUrl}`, requestline) as Observable<Requestline>;
  }

  // change(requestline): update
  change(requestline: Requestline): Observable<any> {
    return this.http.put(`${this.baseUrl}/${requestline.id}`, requestline) as Observable<any>;
  }

  // remove(requestline): delete
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
