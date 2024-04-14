import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPass ,ApiResponse} from '../models/newPassword';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) {
    
   }
   updateUser(user:UserPass){
    return this.http.put<ApiResponse<UserPass>>(` http://localhost:3000/user/newPass`,user)
  }
}
 