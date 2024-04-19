import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';


import io from 'socket.io-client';
const socket = io('http://3.227.76.3/');

@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css'
})
export class TemperaturaComponent implements OnInit, OnDestroy {
  public temp: any;
  public humedad: any;
  public tempF: any;

  
  private subscription: Subscription | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.getMessages().subscribe((message) => {
      this.humedad = message.message.humidity;
      this.temp=message.message.temperature_C;
      this.tempF=message.message.temperature_F;
      console.log(this.temp);
      this.changeDetectorRef.detectChanges();
  });
   
}
public getMessages(): Observable<any> {
  return new Observable<any>((observer) => {
    socket.on('temperatura', (message: string) => {
      observer.next(message);
    });

    return () => {
      socket.off('temperatura');
    };
  });
}


}