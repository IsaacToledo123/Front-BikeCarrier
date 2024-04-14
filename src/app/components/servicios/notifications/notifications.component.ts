import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
interface Notificacion {
  id: number;
  titulo: string;
  contenido: string;
}
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notificaciones: Notificacion[] = [
    { id: 1, titulo: 'Notificación 1', contenido: 'Contenido de la notificación 1' },
    { id: 2, titulo: 'Notificación 2', contenido: 'Contenido de la notificación 2' },
    { id: 3, titulo: 'Notificación 3', contenido: 'Contenido de la notificación 3' }
  ];
}
