import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'http';
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

  // requests(int id) => Retrieves all of the requests in review status but not owned by the user
  // whose primary key is id. The URL is api/request/reviews/5
  requests(id: number):Observable<Request[]> {
    return this.http.get(`${this.baseUrl}/reviews/${id}`) as Observable<Request[]>;
  }

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
  
  // review(int id, Request req) => Sets the request req to review or approved based on
  // the request total. The URL is api/request/review/5
  review(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/review/${request.id}`, request) as Observable<any>;
  }

  // approve(int id, Request req) => Sets the request req to approved unconditionally.
  // The URL is api/requests/approve/5.
  approve(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/approve/${request.id}`, request) as Observable<any>;
  }
  
  // reject(int id, Request req) => Sets the request req to rejected unconditionally. When rejected, a
  // request must include text in the rejectionReason property. The URL is api/request/reject/5.
  reject(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/reject/${request.id}`, request) as Observable<any>;
  }

  // remove(request): delete
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
