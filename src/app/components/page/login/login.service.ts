import { HttpClient } from '@angular/common/http';
import { Injectable, Input ,EventEmitter} from '@angular/core';
import { ApiResponse, UserLog } from '../../../models/login';
import { Observable } from 'rxjs';
import { UserPass } from '../../../models/newPassword';
import { User } from '../../../models/Users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

@Input() disparadorDeUsuario:EventEmitter<any>=new EventEmitter()

  constructor(private http:HttpClient) { }
postLogin(user:UserLog): Observable<ApiResponse<UserLog>>{
  return  this.http.post<ApiResponse<UserLog>>('http://localhost:3000/user/login',user)
}
newPassword(user:UserPass): Observable<ApiResponse<UserPass>>{  
  return this.http.put<ApiResponse<UserPass>>(`http://localhost:3000/user/newPass`,user)
}

}
 