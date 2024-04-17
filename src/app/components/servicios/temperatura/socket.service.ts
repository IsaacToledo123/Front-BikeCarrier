import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;

  constructor() {
    this.socket = io('', { transports: ['websocket'], upgrade: false }); // Reemplaza con la URL de tu servidor WebSocket
  }
  getMessages(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('servicio', (data: any) => {
        observer.next(data);
      });
    });
  }
}
