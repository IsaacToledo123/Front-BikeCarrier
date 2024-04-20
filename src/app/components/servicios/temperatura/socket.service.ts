import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;

  constructor() {
    this.socket = io('http://localhost:3005');
  }

  public onTemperature(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('temperatura', (data: any) => observer.next(data));
    });
  }

  public onNotificationAlert(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('notification-alert', (data: any) => observer.next(data));
    });
  }

  public onAlerta(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('alerta', (data: any) => observer.next(data));
    });
  }
}
