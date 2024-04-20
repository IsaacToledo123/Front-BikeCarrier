import { Component, OnDestroy, OnInit } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { SocketService } from './socket.service';
@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css'
})
export class TemperaturaComponent implements OnInit {
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.onTemperature().subscribe(data => {
      console.log('Temperature data received:', data);
    });

    this.socketService.onNotificationAlert().subscribe(data => {
      console.log('Notification alert received:', data);
    });

    this.socketService.onAlerta().subscribe(data => {
      console.log('Alerta data received:', data);
    });
  }

 
}