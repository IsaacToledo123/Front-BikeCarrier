import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-costos',
    standalone: true,
    templateUrl: './costos.component.html',
    styleUrl: './costos.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class CostosComponent {

}
