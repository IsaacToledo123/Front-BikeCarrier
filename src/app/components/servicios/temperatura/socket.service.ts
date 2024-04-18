import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService  extends Socket{
constructor(){
  super({
    url:'http://3.227.76.3/',
    options:{
      query:{
        nameRoom:'temperatura'
      }
    }
  });
}
onEvent(event: string): Observable<any> {
  return new Observable<any>(observer => {
    this.ioSocket.on(event, (data: any) => {
      observer.next(data);
    });
  });
}
}
