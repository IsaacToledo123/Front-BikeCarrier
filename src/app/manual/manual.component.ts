import { Component } from '@angular/core';
import { NavbarComponent } from '../components/page/navbar/navbar.component';

@Component({
  selector: 'app-manual',
  standalone: true,
  templateUrl: './manual.component.html',
  styleUrl: './manual.component.css',
  imports: [NavbarComponent]
})
export class ManualComponent {

}
