import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css'
})
export class TemperaturaComponent {
  message: string = '';
  messages: string[] = [];

  constructor(private webSocketService: SocketService) { }

  ngOnInit(): void {
    this.webSocketService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

}
