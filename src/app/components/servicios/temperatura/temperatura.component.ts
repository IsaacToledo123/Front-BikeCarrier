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
  private socket: Socket | undefined;
  messages: string[] = [];

  constructor(private servicio:SocketService) { }

  ngOnInit(): void {
   
  }

 
}