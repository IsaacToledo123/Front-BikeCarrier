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


@Input() disparadorDeLugar:EventEmitter<any>=new EventEmitter()

  constructor(private http:HttpClient) { }
postLogin(user:UserLog): Observable<ApiResponse<UserLog>>{
  return  this.http.post<ApiResponse<UserLog>>('http://34.232.166.125/user/login',user)
}
newPassword(user:UserPass): Observable<ApiResponse<UserPass>>{  
  return this.http.put<ApiResponse<UserPass>>(`http://34.232.166.125/user/newPass`,user)
}
getUser(user:string):Observable<ApiResponse<User>>{
  return this.http.get<ApiResponse<User>>(`http://34.232.166.125/user/${user}`)
 }
 posttButton(user:number): Observable<any>{
  return  this.http.post('http://34.232.166.125/user/off',{})
}
}
 