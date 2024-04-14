import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLog,ApiResponse } from '../../../models/login';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) {}
   getUser(id:string): Observable<ApiResponse<UserLog>>{  
    return this.http.get<ApiResponse<UserLog>>(`http://localhost:3000/user/login${id}`)
  }
}
