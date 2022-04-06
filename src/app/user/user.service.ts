import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl: string = "http://localhost:3918/api/users";

  constructor(
    private http: HttpClient
  ) { }

  // Adding functions:

  // list(): get all rows
  list(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<User[]>;
  }

  // get(id): get a single row by primary key
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<User>;
  }

  // create(user): insert
  create(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}`, user) as Observable<User>;
  }

  // change(user): update
  change(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/${user.id}`,user) as Observable<any>;
  }

  // remove(user): delete
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
