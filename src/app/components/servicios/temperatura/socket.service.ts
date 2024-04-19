import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket | null = null;

  constructor() { }

  iniciarSocket() {
    if (!this.socket) {
      this.socket = new Socket({
        url: 'http://3.227.76.3/',
        options: {
          query: {
            nameRoom: 'temperatura'
          }
        }
      });
    }
  }

  desconectarSocket() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  obtenerSocket(): Socket {
    if (!this.socket) {
      throw new Error('Socket no inicializado. Debes llamar a iniciarSocket() primero.');
    }
    return this.socket;
  }
}
