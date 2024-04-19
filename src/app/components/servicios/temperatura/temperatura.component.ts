import { Component, OnDestroy, OnInit } from '@angular/core';

import io from 'socket.io-client';
const socket = io('http://3.227.76.3/');

@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css'
})
export class TemperaturaComponent implements OnInit {
  humedad: any
  temp: any


  messages: any

  constructor() { }

  ngOnInit(): void {
    socket.on('temperatura', (data) => {
        this.humedad = JSON.stringify(data.message);
        const parsedData = JSON.parse(this.humedad);
        // Mueve la lógica de localStorage aquí
        this.guardarHumedadEnLocalStorage(parsedData.humedad);
    });
}

private guardarHumedadEnLocalStorage(humedad: any): void {
    // Accede a localStorage aquí, que solo se ejecutará en el navegador
    localStorage.setItem('humedad', humedad);
}

// Llama a guardarHumedadEnLocalStorage cuando sea apropiado, por ejemplo:
private handleTemperatura(data: any): void {
  this.humedad = JSON.stringify(data.message);
  const parsedData = JSON.parse(this.humedad);
  this.guardarHumedadEnLocalStorage(parsedData.humedad);
}

}