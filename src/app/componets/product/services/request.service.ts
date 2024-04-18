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
    return this.http.get<ApiResponse<UserLog>>(`http://34.232.166.125/user/login${id}`)
  }
}
