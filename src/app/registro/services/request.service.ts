import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, User } from '../../models/Users';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class RequestService {

 
  constructor(private http: HttpClient) { }


  getAllUser(): Observable<ApiResponse<User[]>>{
    return this.http.get<ApiResponse<User[]>>('http://34.232.166.125/user')

  }
  getUser(id:string): Observable<ApiResponse<User>>{  
    return this.http.get<ApiResponse<User>>(`http://34.232.166.125/user/${id}`)
  }
  createUser(user:User): Observable<ApiResponse<User>>{
    
    return this.http.post<ApiResponse<User>>('http://localhost:3000/user/',user)
    
  }
  updateUser(id:string,user:User){
    return this.http.put<ApiResponse<User>>(`http://34.232.166.125/user/${id}`,user)
  }
  deleteUser(id:string): Observable<any>{
    return this.http.delete<ApiResponse<User>>(`http://34.232.166.125/user/${id}`)
  }
}
