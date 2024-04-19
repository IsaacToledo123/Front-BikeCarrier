import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import io from 'socket.io-client';
const socket = io('http://3.227.76.3/');
interface Notificacion {
  codigo:number
  message:string;
}
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {
  notificaciones: Notificacion[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    try {
      socket.on('notification-alert', (data: Notificacion) => {
        console.log(data);
        this.notificaciones.push(data);
    
        this.cdr.detectChanges();
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
