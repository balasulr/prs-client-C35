import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  baseUrl: string = "http://localhost:3918/api/requests";


  constructor(
    private http: HttpClient
  ) { }

  // Adding functions:

  // list(): get all rows
  list(): Observable<Request[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Request[]>;
  }

  // get(id): get a single row by primary key
  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Request>;
  }

  // create(request): insert
  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseUrl}`, request) as Observable<Request>;
  }

  // change(request): update
  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/${request.id}`, request) as Observable<any>;
  }

  // remove(request): delete
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
