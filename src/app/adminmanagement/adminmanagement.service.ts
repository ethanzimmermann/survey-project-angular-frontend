import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminmanagementService {

  constructor(private http: HttpClient) { }

  //Gets all existing admins
  public getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>('/api/Admin')
  }

  //Posts a new admin
  public postAdmin(admin: Admin){
    return this.http.post<Admin>('/api/Admin', admin);
  }
}
