import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recuUser,ApiResponse } from '../../../models/recuPass';

@Injectable({
  providedIn: 'root'
})
export class RecupassService {

  constructor(private http:HttpClient) {}
  PutPass(user:recuUser):Observable<ApiResponse<recuUser>>{
    return this.http.put<ApiResponse<recuUser>>('http://34.232.166.125/user/recuPass',user)
  }
}
