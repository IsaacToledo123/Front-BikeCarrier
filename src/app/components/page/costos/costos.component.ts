import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ServicepayService } from '../../../pay/servicepay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costos',
  standalone: true,
  templateUrl: './costos.component.html',
  styleUrl: './costos.component.css',
  imports: [NavbarComponent, FooterComponent]
})
export class CostosComponent {
  constructor(private servicio: ServicepayService, private router: Router) {

  }
  onSubmit(num: number) {
    localStorage.setItem('paquete', num.toString()); // Convertir a cadena antes de almacenar en localStorage
    this.router.navigate(['/payLoad']);
}

}
