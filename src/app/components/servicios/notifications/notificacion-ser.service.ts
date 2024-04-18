import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class NotificacionSerService {

  private socket: any;

  constructor() {
    this.socket = io('', { transports: ['websocket'], upgrade: false }); 
  }
  getMessages(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('temperatura', (data: any) => {
        return data
      });
    });
  }
}
