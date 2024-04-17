import { Component } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
 
  }

}
