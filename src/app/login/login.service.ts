import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../adminmanagement/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //Posts admin to back end to check crednetials
  public checkAdmin(admin: Admin): Observable<Admin>{
    return this.http.post<Admin>('/api/Admin/CheckAdmin', admin);
  }
}
