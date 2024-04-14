import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, Pay, User } from '../models/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicepayService {

  constructor(private http: HttpClient) {}
  getUser(user:string):Observable<ApiResponse<User>>{
    return this.http.get<ApiResponse<User>>(`http://localhost:3000/getOneUser/${user}`)
   }
   postPay(pay:Pay): Observable<ApiResponse<Pay>>{
    return  this.http.post<ApiResponse<Pay>>('http://localhost:3000/user/pay',pay)
  }
}
