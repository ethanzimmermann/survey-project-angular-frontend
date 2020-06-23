import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private http: HttpClient) {
  }
  
  //Get all users created by current admin
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/User/'+localStorage.getItem("currentUser"))
  }

  //Get user by id
  public getUser(id: number): Observable<User> {
    return this.http.get<User>('/api/User/GetUser/'+id);
  }

  //Save user to the backend
  public postUser(user: User){
    return this.http.post<User>('/api/User', user);
  }

  
}
