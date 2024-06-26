import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import io from 'socket.io-client';
const socket = io('http://3.227.76.3/');
interface Notificacion {
  codigo: number
  message: string;
  timestamp: string;
}
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {
  notificaciones: Notificacion[] = [];


  private subscription: Subscription | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.subscription = this.getMessages().subscribe((message) => {
      const currentTime = new Date().toLocaleTimeString(); 
      const notification: Notificacion = {
        codigo: message.codigo,
        message: message.message,
        timestamp: currentTime
      };
      this.notificaciones.unshift(notification);
      console.log(`Mensaje recibido a las ${currentTime}: ${message.message}`);
      this.changeDetectorRef.detectChanges();
    });
  }
  public getMessages(): Observable<any> {
    return new Observable<any>((observer) => {
      socket.on('notification-alert', (message: string) => {
        observer.next(message);
      });

      return () => {
        socket.off('notification-alert');
      };
    });
  }

}
